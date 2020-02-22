import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { useAuth } from '@providers/Auth';

export function LoginFrom ( { ...props } ) {

	const { increment } = useAuth();

	return (
		<TouchableOpacity onPress={ () => {increment()}}>
			<Text>Login</Text>
		</TouchableOpacity>
	);

}
