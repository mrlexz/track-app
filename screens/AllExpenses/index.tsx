import React from 'react';
import {StyleSheet} from 'react-native';
import Expenses from '../../components/Expenses';

const AllExpenses = () => {
  return <Expenses expensesPeriod="All Expenses" />;
};

export default AllExpenses;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
