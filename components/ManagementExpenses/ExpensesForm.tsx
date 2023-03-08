import React, {FC, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import uuid from 'react-native-uuid';
import CustomInput from './Input';
import {GlobalStyles} from '../../constants/styles';
import CustomButton from '../Expenses/Button';
import {Data} from '../Expenses';

type InputValues = {
  amount: string;
  date: string;
  description: string;
};

type ExpensesFormProps = {
  expenseId: string | undefined;
  handleCancel: () => void;
  handleConfirm: (data: Data) => void;
  selectedExpenses: Data | undefined;
};

const ExpensesForm: FC<ExpensesFormProps> = ({
  expenseId,
  handleCancel,
  handleConfirm,
  selectedExpenses,
}) => {
  const [inputValues, setInputValues] = useState<InputValues>(() => {
    if (selectedExpenses) {
      return {
        amount: selectedExpenses.amount.toString(),
        date: selectedExpenses.date.toISOString().slice(0, 10),
        description: selectedExpenses.description,
      };
    }
    return {
      amount: '',
      date: '',
      description: '',
    };
  });

  const inputChangedHandler = (inputIdentifier: string, inputValue: string) => {
    setInputValues(prevState => ({
      ...prevState,
      [inputIdentifier]: inputValue,
    }));
  };

  const onSubmit = () => {
    const expensesData: Data = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
      id: expenseId ? expenseId : (uuid.v4() as string),
    };

    const isValidAmount =
      !isNaN(expensesData.amount) && expensesData.amount > 0;
    const isValidDate =
      new Date(expensesData.date).toString() !== 'Invalid Date';
    const isValidDesc = expensesData.description.trim().length > 0;

    if (!isValidAmount || !isValidDate || !isValidDesc) {
      Alert.alert('Invalid input', 'Please check the errors in the form.');
      return;
    }

    handleConfirm(expensesData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputRows}>
        <CustomInput
          label="Amount"
          textInputProps={{
            keyboardType: 'number-pad',
            onChangeText: (text: string) => inputChangedHandler('amount', text),
            value: inputValues.amount,
          }}
          inputContainerStyle={styles.flex1}
        />
        <CustomInput
          label="Date"
          textInputProps={{
            keyboardType: 'number-pad',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (text: string) => inputChangedHandler('date', text),
            value: inputValues.date,
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
          onChangeText: (text: string) =>
            inputChangedHandler('description', text),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <CustomButton title="Cancel" mode="flat" onPress={handleCancel} />
        <CustomButton title={expenseId ? 'Update' : 'Add'} onPress={onSubmit} />
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
