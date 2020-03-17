import React, { FunctionComponent, useState, Fragment } from "react";
import { observer } from "mobx-react-lite";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Block, Text, Button } from "components";
import * as theme from 'theme';
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Password } from "components/password/password";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AuthScreensLoginScreen: FunctionComponent = observer( ( props ) => {

	const [ isLoading, setIsLoading ] = useState( false );
	const navigation = useNavigation();
	const formik = useFormik({
		initialValues: {
			mobilenumber: '',
			password: ''
		},
		onSubmit ( ) { },
		validationSchema: Yup.object().shape({
			mobilenumber: Yup.string().length(10, 'Invalid mobilenumber').required(),
			password: Yup.string().required()
		})
	});

	function handleSignInPressed ( ) { }

	return (
		<TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
			<Block flex>
				<Block row flex={2} middle center>
					<Text preset="subheader">slam</Text>
					<Text preset="subheader" ml={10} color={theme.colors.primary}>book</Text>
				</Block>
				<Block flex={2} px={16}>
					<Input
						placeholder="your mobile number ..."
						leftIcon={{ type: 'feather', name: 'phone' }}
						keyboardType="phone-pad"
						keyboardAppearance='light'
						onChangeText={ formik.handleChange('mobilenumber') }
						onBlur={ ( e ) => {
							formik.handleBlur('mobilenumber')
						} }
						value={formik.values.mobilenumber}
						errorMessage={formik.errors['mobilenumber']}
						/>
					<Password 
						placeholder="password ..."
						leftIcon={{ type: 'feather', name: 'lock' }}
						keyboardAppearance='light'
						onChangeText={ formik.handleChange('password') }
						onBlur={ ( e ) => {
							formik.handleBlur('mobilenumber')
						} }
						value={formik.values.password}
						errorMessage={formik.errors['password']}
						/>
					<Block right>
						<Button type="clear" title="Forgot Password ?" onPress={ ( ) => navigation.navigate('forgotpassword') }></Button>
					</Block>
				</Block>
				<Block mb={15} middle flex>
					<Button
						type="solid" 
						title="Sign in" 
						containerStyle={{ width: '75%' }} 
						disabled={isLoading || !formik.isValid} 
						loading={isLoading}
						onPress={ handleSignInPressed }/>
					<Block py={15} ></Block>
					<Button type="clear" title="Dont have account? Sign Up" style={{ marginTop: 30 }} onPress={ ( ) => navigation.navigate('register') }/>
				</Block>
			</Block>
		</TouchableWithoutFeedback>
	);

} );