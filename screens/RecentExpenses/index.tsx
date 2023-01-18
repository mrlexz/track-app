import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Expenses from '../../components/Expenses';

const RecentExpenses = () => {
  return <Expenses expensesPeriod="Last 7 days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
