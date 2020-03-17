import * as React from "react"
import { View, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { Text, Icon } from "../"
import { spacing } from "../../theme"

const BULLET_ITEM: ViewStyle = {
	flexDirection: "row",
	marginTop: spacing.medium,
	paddingBottom: spacing.medium,
	borderBottomWidth: 1,
	borderBottomColor: "#3A3048",
}
const BULLET_CONTAINER: ViewStyle = {
	marginRight: spacing.medium - 1,
	marginTop: spacing.small,
}
const BULLET: ImageStyle = {
	width: 8,
	height: 8,
}
const BULLET_TEXT: TextStyle = {
	flex: 1,
	fontFamily: "Montserrat-Regular",
	color: "#BAB6C8",
	fontSize: 15,
	lineHeight: 22,
}

export interface BulletItemProps {
	text: string
}

export function BulletItem(props: BulletItemProps) {
	return (
		<View style={BULLET_ITEM}>
			<Icon icon="bullet" containerStyle={BULLET_CONTAINER} style={BULLET} />
			<Text style={BULLET_TEXT} text={props.text} />
		</View>
	)
}
