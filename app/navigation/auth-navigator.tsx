import React, { FunctionComponent } from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { observer } from "mobx-react-lite";
import { AuthScreensLoginScreen } from "screens/auth-screens/login-screen";
import { AuthScreensRegisterScreen } from "screens/auth-screens/register-screen";
import { AuthScreensForgotPasswordScreen } from "screens/auth-screens/forgotpassword-screen";

const { Navigator, Screen } = createNativeStackNavigator<{
	register: undefined,
	login: undefined,
	forgotpassword: undefined
}>();

export const AuthStack: FunctionComponent = observer( ( props ) => {

	return (
		<Navigator
			initialRouteName="register"
			screenOptions={{
				headerShown: false,
				gestureEnabled: true,
				stackPresentation: "push",
				contentStyle: {
					backgroundColor: 'white'
				}
			}}>
			<Screen 
				name="register" 
				component={AuthScreensRegisterScreen} />
			<Screen 
				name="login" 
				component={AuthScreensLoginScreen} />
			<Screen 
				name="forgotpassword" 
				component={AuthScreensForgotPasswordScreen} />
		</Navigator>
	);

} );