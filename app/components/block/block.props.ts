import { ViewStyle, ViewProps } from "react-native"
import { BaseProps } from "components/base/base-props";

export interface BlockProps extends ViewProps, BaseProps {

	flex?: boolean | number

	/**
	 * Style overrides for the icon image
	 */
	style?: ViewStyle | ViewStyle[],

	/**
	 * One of the different types of text presets.
	 */
	children?: React.ReactNode,

	/**
	 * Content alignment
	 */
	middle?: boolean,

	/**
	 * Self alignment
	 */
	center?: boolean;

	/**
	 * Content alignment
	 */
	right?: boolean,

	/**
	 * Self alignment
	 */
	left?: boolean;

	/**
	 * Content alignment
	 */
	top?: boolean,

	/**
	 * Self alignment
	 */
	bottom?: boolean;

	/**
	 * Flex direction
	 */
	row?: boolean

	/**
	 * Flex direction
	 */
	space?: "evenly" | "between" | "around"
}
