import React, { FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import { Block, Text, Button } from "components";
import { Input } from "react-native-elements";
import { Divider } from "components/divider/divider";

export const AuthScreensForgotPasswordScreen: FunctionComponent<{}> = observer( props => {

	return (
		<Block flex px={20}>
			<Block flex={0.35} middle center>
				<Text preset="bold">Forgot password</Text>
				<Divider/>
				<Text style={{ textAlign: 'center' }}>Enter your registered mobile number, we will send you an OTP in order to reset the password.</Text>
			</Block>
			<Block flex={0.6}>
				<Input keyboardType="phone-pad" placeholder="Mobilenumber"/>
				<Input keyboardType="phone-pad" placeholder="OTP" />
				<Input placeholder="Password"/>
				<Input placeholder="Re enter password"/>
			</Block>
			<Block middle>
				<Button type="solid" title="Reset password" containerStyle={{ width: '75%' }}/>
			</Block>
		</Block>
	);

} );