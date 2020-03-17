import * as React from "react"
import { Button as RNEButton } from 'react-native-elements';
import { ButtonProps } from "./button.props";
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "theme";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button( props: ButtonProps ) {

	const {
		gradient = true,
		type,
		...rest
	} = props;

	return gradient && type == 'solid'
		? <RNEButton 
			ViewComponent={LinearGradient} 
			linearGradientProps={{
				colors: [ colors.primaryLighter, colors.primary ],
				start: { x: 0, y: 1 },
				end: { x: 1, y: 0 }
			}} 
			type={type}
			{...rest}/> 
		: <RNEButton type={type} {...rest}/>;
}
