import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from './Input';
import {GlobalStyles} from '../../constants/styles';

const ExpensesForm = () => {
  const amountChangeHandler = (text: string) => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputRows}>
        <CustomInput
          label="Amount"
          textInputProps={{
            keyboardType: 'number-pad',
            onChangeText: amountChangeHandler,
          }}
          inputContainerStyle={styles.flex1}
        />
        <CustomInput
          label="Date"
          textInputProps={{
            keyboardType: 'number-pad',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
          }}
          inputContainerStyle={styles.flex1}
        />
      </View>
      <CustomInput
        label="Description"
        textInputProps={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: 'none',
        }}
      />
    </View>
  );
};

export default ExpensesForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  inputRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white,
    marginVertical: 24,
    textAlign: 'center',
  },
});
