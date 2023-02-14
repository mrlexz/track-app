import {FC} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {GlobalStyles} from '../../../constants/styles';

type CustomButtonProps = {
  onPress: () => void;
  title: string;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  mode?: 'flat' | 'contained';
};
const CustomButton: FC<CustomButtonProps> = ({
  onPress,
  title,
  containerStyle,
  buttonStyle,
  titleStyle,
  mode = 'contained',
}) => {
  return (
    <View style={containerStyle}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View
          style={StyleSheet.flatten([
            styles.button,
            buttonStyle,
            mode === 'flat' && styles.flat,
          ])}>
          <Text
            style={StyleSheet.flatten([
              styles.text,
              titleStyle,
              mode === 'flat' && styles.flatText,
            ])}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
  },
});
