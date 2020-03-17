import * as React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button, Icon, Text } from "../"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"

// static styles
const ROOT: ViewStyle = {
	flexDirection: "row",
	paddingHorizontal: spacing.medium,
	alignItems: "center",
	paddingTop: spacing.large,
	paddingBottom: spacing.large,
	justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const Header: React.FunctionComponent<HeaderProps> = props => {
	const {
		onLeftPress,
		onRightPress,
		rightIcon,
		leftIcon,
		headerText,
		headerTx,
		style,
		titleStyle,
	} = props
	const header = headerText || (headerTx && translate(headerTx)) || ""

	return (
		<View style={{ ...ROOT, ...style }}>
			{leftIcon ? (
				<Button preset="link" onPress={onLeftPress}>
					<Icon icon={leftIcon} />
				</Button>
			) : (
					<View style={LEFT} />
				)}
			<View style={TITLE_MIDDLE}>
				<Text style={{ ...TITLE, ...titleStyle }} text={header} />
			</View>
			{rightIcon ? (
				<Button preset="link" onPress={onRightPress}>
					<Icon icon={rightIcon} />
				</Button>
			) : (
					<View style={RIGHT} />
				)}
		</View>
	)
}