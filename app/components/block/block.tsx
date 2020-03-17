import React from "react"
import { BlockProps } from "./block.props";
import { View, ViewStyle } from "react-native";

export function Block ( props: BlockProps ) {

	const {
		children,
		flex,
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
		row,
		top,
		bottom,
		left,
		right,
		middle,
		center,
		space,
		style,
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

	const blockStyle = [
		flex && { flex: flex === true ? 1 : flex } as ViewStyle,
		row && { flexDirection: row ? 'row' : 'column' }  as ViewStyle,
		space && { justifyContent: `space-${space}` }  as ViewStyle,
		top && { alignItems: 'flex-start', alignSelf: 'flex-start' } as ViewStyle,
		bottom && { alignItems: 'flex-end', alignSelf: 'flex-end' } as ViewStyle,
		left && { alignItems: 'flex-start' } as ViewStyle,
		right && { alignItems: 'flex-end' } as ViewStyle,
		middle && {
			alignItems: 'center',
			justifyContent: 'center',
		} as ViewStyle,
		center && {
			alignItems: 'center',
			alignSelf: 'center',
		} as ViewStyle,
		...marginStyles,
		...paddingStyles,
		style
	];

	return (
		<View style={blockStyle} {...rest}>
			{children}
		</View>
	)

}