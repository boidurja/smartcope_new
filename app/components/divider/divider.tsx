import React from 'react';
import { ViewProps, View, ViewStyle, StyleSheet } from "react-native";
import { spacing } from "theme";

export interface DividerProps extends ViewProps {

	size?: number

}

export function Divider ( props: DividerProps ) {
	
	const {
		size = spacing.small,
		style,
		...rest
	} = props;

	const styles = StyleSheet.flatten([
		style,
		{ marginVertical: size } as ViewStyle
	]);

	return <View style={styles} {...rest} />

}