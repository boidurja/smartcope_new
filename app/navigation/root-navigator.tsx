import React, { FunctionComponent, useEffect } from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { PrimaryNavigator } from "./primary-navigator"
import { observer } from "mobx-react-lite"
import { useStores } from "models/root-store";
import { Screen } from 'components/screen/screen'
import { ActivityIndicator } from "react-native"
import { AuthStack } from "./auth-navigator"
import * as theme from "theme"

const { Navigator, Screen: NavigationScreen } = createNativeStackNavigator();

const RootStack: FunctionComponent<{}> = observer( (props) => {
	
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
				gestureEnabled: true,
				stackPresentation: "modal",
			}}>
			<NavigationScreen 
				name="primaryStack"
				component={PrimaryNavigator}/>
		</Navigator>
	);

} );

export const RootNavigator = observer<Partial<React.ComponentProps<typeof NavigationContainer>>, NavigationContainerRef>( ( props, ref ) => {

	const { authStore } = useStores();

	useEffect( ( ) => {

		(async ( ) => {
			authStore.bootstrap();
		})();

	}, [] );

	if ( authStore.bootstrapping ) {
		return (
			<Screen middle preset="fixed">
				<ActivityIndicator size={30} color="red"/>
			</Screen>
		);
	}

	return (
		<NavigationContainer theme={theme as any} {...props} ref={ref}>
			{
				authStore.user 
				? <RootStack />
				: <AuthStack />
			}
		</NavigationContainer>
	)

}, { forwardRef: true } );

RootNavigator.displayName = "RootNavigator";