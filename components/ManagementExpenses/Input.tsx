import React from 'react';
import {
  Text,
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {GlobalStyles} from '../../constants/styles';

type InputProps = {
  label: string;
  textInputProps?: TextInputProps;
  inputContainerStyle?: ViewStyle;
};

const CustomInput = ({
  label,
  textInputProps,
  inputContainerStyle,
}: InputProps) => {
  return (
    <View style={StyleSheet.flatten([styles.container, inputContainerStyle])}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          textInputProps && textInputProps.multiline
            ? styles.inputMultiline
            : undefined,
        ]}
        {...textInputProps}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 8,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
