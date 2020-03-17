import React, { FunctionComponent, useState } from "react";
import { Input, Icon, InputProps } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { typography } from "theme";

export const Password: FunctionComponent<InputProps> = props => {

	const [ showPassword, setShowPassword ] = useState( false );
	
	return (
		<Input 
			rightIcon={
				<TouchableOpacity onPress={ ( ) => setShowPassword( !showPassword ) }>
					<Icon name={ showPassword ? 'eye-off' : 'eye' } type="feather" size={typography.size *  1.25}></Icon>
				</TouchableOpacity>
			}
			secureTextEntry={!showPassword}
			rightIconContainerStyle={{ marginRight: 15 }}
			{ ...props }/>
	)

}