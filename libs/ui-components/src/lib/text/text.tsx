import {Text as RNTExt} from 'react-native';
import { TypographyProps } from './models';
import styles from './text.styles';

export const Text = (props: TypographyProps) => {
  return (
    <RNTExt style={[styles[props.type as keyof typeof styles], props.style]}>{props.children}</RNTExt>
  );
};

Text.defaultProps = {
  type: 'base',
};

export default Text;

