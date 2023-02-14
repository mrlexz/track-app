import React from 'react';
// import {StyleSheet} from 'react-native';
import Expenses from '../../components/Expenses';
import {useExpenses} from '../../stores/ExpensesContext';

const RecentExpenses = () => {
  const {expenses} = useExpenses();
  return <Expenses expenses={expenses} expensesPeriod="Last 7 days" />;
};

export default RecentExpenses;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
