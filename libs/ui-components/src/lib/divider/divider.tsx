import { View } from 'react-native';
import { styles } from './divider.styles';

interface Props {
  top: number;
  botton: number;
  color?: string;
}

export const Divider = ({ top, botton, color }: Props) => {
  return (
    <View
      style={[
        styles().line,
        { borderBottomColor: color },
        { marginTop: top, marginBottom: botton },
      ]}
    />
  );
};

Divider.defaultProps = {
  top: 5,
  botton: 5,
  color: '#E5E5E5',
};

export default Divider;
