import * as React from "react"
import { Text as ReactNativeText } from "react-native"
import { presets } from "./text.presets"
import { TextProps } from "./text.props"
import { translate } from "../../i18n"
import { mergeAll, flatten } from "ramda"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
	// grab the props
	const { 
		preset = "default", 
		tx, 
		txOptions, 
		text, 
		children, 
		style: styleOverride, 
		mt,
		mb,
		ml,
		mr,
		mx,
		my,
		ma,
		pt,
		pb,
		pl,
		pr,
		px,
		py,
		pa,
		color,
		...rest 
	} = props;

	const marginStyles = [
		{ margin: ma },
		{ marginVertical: my },
		{ marginHorizontal: mx },
		{ marginTop: mt },
		{ marginBottom: mb },
		{ marginLeft: ml },
		{ marginRight: mr },
	];

	const paddingStyles = [
		{ padding: pa },
		{ paddingVertical: py },
		{ paddingHorizontal: px },
		{ paddingTop: pt },
		{ paddingBottom: pb },
		{ paddingLeft: pl },
		{ paddingRight: pr },
	]

	// figure out which content to use
	const i18nText = tx && translate(tx, txOptions)
	const content = i18nText || text || children

	const style = mergeAll(flatten([
		presets[preset] || presets.default, 
		color && { color },
		...marginStyles,
		...paddingStyles,
		styleOverride
	]));

	return (
		<ReactNativeText {...rest} style={style}>
			{content}
		</ReactNativeText>
	)
}
