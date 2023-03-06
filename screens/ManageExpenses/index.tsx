import React, {FC, useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ManageExpensesScreenProp} from '../../navigation/types';
import CustomButton from '../../components/Expenses/Button';
import {GlobalStyles} from '../../constants/styles';
import ExpensesForm from '../../components/ManagementExpenses/ExpensesForm';

const ManageExpenses: FC<ManageExpensesScreenProp> = ({route, navigation}) => {
  const {expenseId} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseId ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, expenseId]);
  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ExpensesForm />
      <View style={styles.buttons}>
        <CustomButton title="Cancel" mode="flat" onPress={handleCancel} />
        <CustomButton
          title={expenseId ? 'Update' : 'Add'}
          onPress={handleConfirm}
        />
      </View>
      {expenseId && (
        <View style={styles.deleteContainer}>
          <CustomButton
            title="delete"
            onPress={() => {}}
            titleStyle={styles.buttonText}
            buttonStyle={styles.buttonContainer}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {},
  buttonContainer: {
    backgroundColor: GlobalStyles.colors.error500,
  },
});
