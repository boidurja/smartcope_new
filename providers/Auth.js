import React, { createContext, useContext, useMemo, useState, useLayoutEffect } from 'react';
import { api } from "@api";
import { AsyncStorage } from 'react-native';

const AuthContext = createContext();

export function AuthProviders ( { ...props } ) {

	const [ state, setState ] = useState({
		user: undefined,
		token: undefined,
	});

	useLayoutEffect( ( ) => {

		api.addAsyncRequestTransform( async ( request ) => {
			const token = await AsyncStorage.getItemAsync('AUTH_TOKEN');
			if ( token && token !== null ) {
				request.headers['Authorization'] = `Bearer ${token}`;
			}
		} )

	}, [] )
	
	const context = useMemo(( ) => ({
		user: state.user,
		token: state.token,
		fetch: async ( ) => {
			// return api
			// .get('/me')
			// .then( async ( { ok, data, problem } ) => {
			// 	if ( !ok ) {
			// 		throw new Error(`${problem}`)
			// 	} else {
			// 		const token = await AsyncStorage.getItemAsync('AUTH_TOKEN');
			// 		setUser( data )
			// 		setToken( token );
			// 		return data;
			// 	}
			// } )

			return new Promise( ( resolve, reject ) => {

				setTimeout( ( ) => {

					setState({
						user: {
							role: 'admin',
							username: 'DineshSalunke'
						}
					})
					resolve({
						role: 'teammember'
					})

				}, 3000 );

			} )
		},	
		login: async ( payload ) => {
			
			return api
			.post( '/auth/login', payload )
			.then( async ( { data, ok, problem } ) => {
				if ( ok ) {
					await AsyncStorage.setItemAsync('AUTH_TOKEN', data.accessToken);
					setUser( data.user )
					setToken( data.accessToken );
				} else {
					if ( problem === 'CLIENT_ERROR' || problem === 'SERVER_ERROR' ) {
						throw data;
					} else {
						throw new Error(`Unable to connect to server, please try again later.`)
					}
				}
			} )
		},	
		logout: async ( ) => {
			setState( { user: undefined, token: undefined } );
			await AsyncStorage.setItem('AUTH_TOKEN', undefined);
		},
		register: async ( payload ) => {
			return api
			.post( '/auth/register', payload )
			.then( ( { data, ok, problem } ) => {
				if ( !ok && problem == 'CLIENT_ERROR' ) {
					const error = new Error(problem);
					error.message = data.message;
					throw error
				}
			} );
		}
	}), [ state.user, state.token ]);

	return <AuthContext.Provider value={context} { ...props }></AuthContext.Provider>
	
}

export function useAuth ( ) {

	const context = useContext( AuthContext );

	if ( context === undefined ) {
		throw new Error('useAuth should be used inside the AuthProvider');
	}

	return context;

}
