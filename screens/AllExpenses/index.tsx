import React from 'react';
// import {StyleSheet} from 'react-native';
import Expenses from '../../components/Expenses';
import {useExpenses} from '../../stores/ExpensesContext';

const AllExpenses = () => {
  const {expenses} = useExpenses();
  return <Expenses expenses={expenses} expensesPeriod="All Expenses" />;
};

export default AllExpenses;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
