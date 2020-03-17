import { typography } from "theme/typography";
import { ButtonProps } from "react-native-elements";

export const Button = {
	titleStyle: {
		fontSize: typography.size,
		fontFamily: typography.primaryMedium,
		lineHeight: typography.size,
		letterSpacing: 0,
		marginHorizontal: typography.size
	},
	containerStyle: {
		borderRadius: typography.size * 2 + typography.size * 2
	},
	buttonStyle: {
		borderRadius: typography.size * 2 + typography.size
	}
} as ButtonProps