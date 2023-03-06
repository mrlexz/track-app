import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpensesListItem from './ExpensesListItem';

export type Data = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

const renderExpensesItem = ({item}: {item: Data}) => {
  return (
    <ExpensesListItem
      amount={item.amount}
      date={item.date}
      description={item.description}
      id={item.id}
    />
  );
};

const Expenses: FC<{
  expenses?: Data[];
  expensesPeriod: string;
}> = ({expenses = [], expensesPeriod}) => {
  const expensesSum = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text style={styles.periodText}>{expensesPeriod}</Text>
        <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
      </View>
      <FlatList
        data={expenses}
        renderItem={renderExpensesItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  periodContainer: {
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  periodText: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
