import React from 'react';
// import {StyleSheet} from 'react-native';
import Expenses from '../../components/Expenses';
import {useExpenses} from '../../stores/ExpensesContext';
import {get7DaysAgo} from '../../utils/date';

const RecentExpenses = () => {
  const {expenses} = useExpenses();
  const recentExpenses = expenses.filter(expense => {
    const today = new Date();
    const last7days = get7DaysAgo(today, 7);
    return expense.date > last7days;
  });
  return <Expenses expenses={recentExpenses} expensesPeriod="Last 7 days" />;
};

export default RecentExpenses;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
