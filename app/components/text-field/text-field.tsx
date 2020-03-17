import * as React from "react"
import { View, TextInput, TextStyle, ViewStyle } from "react-native"
import { colors, spacing, typography } from "../../theme"
import { translate } from "../../i18n"
import { Text } from "../"
import { TextFieldProps } from "./text-field.props"
import { mergeAll, flatten } from "ramda"

// the base styling for the container
const CONTAINER: ViewStyle = {
	paddingVertical: spacing.small,
}

// the base styling for the TextInput
const INPUT: TextStyle = {
	fontFamily: typography.primary,
	color: colors.text,
	minHeight: 44,
	fontSize: 18,
	backgroundColor: colors.palette.white,
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
	default: {},
}

const enhance = (style, styleOverride) => {
	return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export const TextField: React.FunctionComponent<TextFieldProps> = props => {
	const {
		placeholderTx,
		placeholder,
		labelTx,
		label,
		preset = "default",
		style: styleOverride,
		inputStyle: inputStyleOverride,
		forwardedRef,
		...rest
	} = props
	let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] }
	containerStyle = enhance(containerStyle, styleOverride)

	let inputStyle: TextStyle = INPUT
	inputStyle = enhance(inputStyle, inputStyleOverride)
	const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

	return (
		<View style={containerStyle}>
			<Text preset="fieldLabel" tx={labelTx} text={label} />
			<TextInput
				placeholder={actualPlaceholder}
				placeholderTextColor={colors.palette.lighterGrey}
				underlineColorAndroid={colors.transparent}
				{...rest}
				style={inputStyle}
				ref={forwardedRef}
			/>
		</View>
	)
}