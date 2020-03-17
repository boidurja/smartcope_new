import { BaseProps } from "components/base/base-props";
import { ButtonProps as RNEButtonProps } from "react-native-elements";


export interface ButtonProps extends BaseProps, RNEButtonProps {
	
	gradient?: boolean

}
