import { spacing } from "theme/spacing";
import { colors } from "theme/colors";
import { InputProps } from "react-native-elements";
import { typography } from "theme/typography";

export const Input = {
	containerStyle: {
		marginVertical: spacing.small
	},
	errorStyle: {
		marginLeft: spacing.tiny,
		marginBottom: 0
	},
	inputContainerStyle: {
		borderBottomWidth: 0,
		backgroundColor: colors.palette.offWhite,
		borderRadius: typography.size * 2,
		paddingVertical: 0
	},
	inputStyle: {
		alignSelf: 'center',
		alignItems: 'center',
		fontFamily: typography.primary,
		color: colors.text,
		lineHeight:typography.size * 1.5,
		textAlignVertical: 'center',
		fontSize: typography.size,
		paddingLeft: typography.size,
		paddingVertical: spacing.small
	},
	leftIcon: {
		size: typography.size,
		color: colors.dim,
	}
} as InputProps;