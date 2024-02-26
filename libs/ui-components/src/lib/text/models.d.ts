import {TextProps as RNTextProps} from 'react-native';

const MY_VALUES = <const>Object.keys(styles);

type Typography = typeof MY_VALUES[number];

export interface TypographyProps extends RNTextProps {
  type: Typography;
  children?: ReactNode;
}