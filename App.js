import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { GalioProvider } from 'galio-framework'
import { AppProviders } from '@providers';
import { RootContainer } from '@containers/RootContainer';

export default function App ( ) {

	const [ isReady, setIsReady ] = useState( false );

	function loadResourcesAsync ( ) {
		return Promise.all([])
	}

	function handleFinishLoading ( ) {
		setIsReady( true )
	}

	if ( !isReady ) {
		return (
			<AppLoading startAsync={loadResourcesAsync} onFinish={handleFinishLoading}></AppLoading>
		)
	} else { 
		return (
			<GalioProvider theme={{}}>
				<StatusBar hidden />
			</GalioProvider>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
