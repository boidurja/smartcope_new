import { TextStyle } from "react-native"
import { colors, typography } from "../../theme"
import { normalize } from "react-native-elements";

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
	fontFamily: typography.primary,
	color: colors.text,
	fontSize: 16,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
	/**
	 * The default text styles.
	 */
	default: BASE,

	/**
	 * A bold version of the default text.
	 */
	bold: { ...BASE, fontFamily: typography.primaryBold } as TextStyle,

	/**
	 * Large headers.
	 */
	header: { ...BASE, fontSize: normalize(34), fontFamily: typography.primaryBold } as TextStyle,

	/**
	 * Large headers.
	 */
	subheader: { ...BASE, fontSize: normalize(24), fontFamily: typography.primaryBold } as TextStyle,

	/**
	 * Field labels that appear on forms above the inputs.
	 */
	fieldLabel: { ...BASE, fontSize: normalize(13), color: colors.dim } as TextStyle,

	/**
	 * A smaller piece of secondard information.
	 */
	secondary: { ...BASE, fontSize: normalize(9), color: colors.dim } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
