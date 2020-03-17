import { Platform } from "react-native"

/**
 * Just the font names.
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
	/**
	 * The primary font.  Used in most places.
	 */
	primary: Platform.select({ ios: "Montserrat-Regular", android: "Montserrat-Regular" }),

	/**
	 * An alternate font used for perhaps titles and stuff.
	 */
	secondary: Platform.select({ ios: "Montserrat-Regular", android: "Montserrat-Regular" }),

	/**
	 * The primary font.  Used in most places.
	 */
	primaryMedium: Platform.select({ ios: "Montserrat-Medium", android: "Montserrat-Medium" }),

	/**
	 * An alternate font used for perhaps titles and stuff.
	 */
	secondaryMedium: Platform.select({ ios: "Montserrat-Medium", android: "Montserrat-Medium" }),

	/**
	 * The primary font.  Used in most places.
	 */
	primaryBold: Platform.select({ ios: "Montserrat-Bold", android: "Montserrat-Bold" }),

	/**
	 * An alternate font used for perhaps titles and stuff.
	 */
	secondaryBold: Platform.select({ ios: "Montserrat-Bold", android: "Montserrat-Bold" }),

	/**
	 * Font Size
	 */
	size: 16
}
