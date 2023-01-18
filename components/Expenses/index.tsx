import React, {FC} from 'react';
import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../../constants/styles';
import ExpensesListItem from './ExpensesListItem';

export type Data = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

const DUMMY_DATA: Data[] = [
  {
    id: 'e1',
    description: 'Groceries',
    amount: 50,
    date: new Date('2022-01-01'),
  },
  {
    id: 'e2',
    description: 'A pair of shoes',
    amount: 39.29,
    date: new Date('2022-03-02'),
  },
  {
    id: 'e3',
    description: 'A pair of earrings',
    amount: 19.49,
    date: new Date('2022-05-03'),
  },
  {
    id: 'e4',
    description: 'A pair of oxfords',
    amount: 99.99,
    date: new Date('2022-05-03'),
  },
  {
    id: 'e5',
    description: 'Groceries',
    amount: 50,
    date: new Date('2022-01-01'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 39.29,
    date: new Date('2022-03-02'),
  },
  {
    id: 'e7',
    description: 'A pair of earrings',
    amount: 19.49,
    date: new Date('2022-05-03'),
  },
  {
    id: 'e8',
    description: 'A pair of oxfords',
    amount: 99.99,
    date: new Date('2022-05-03'),
  },
];

const renderExpensesItem = ({item}: {item: Data}) => {
  return (
    <ExpensesListItem
      amount={item.amount}
      date={item.date}
      description={item.description}
    />
  );
};

const Expenses: FC<{
  expenses?: Data[];
  expensesPeriod: string;
}> = ({expenses = [], expensesPeriod}) => {
  const expensesSum = DUMMY_DATA.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <View style={styles.periodContainer}>
        <Text style={styles.periodText}>{expensesPeriod}</Text>
        <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
      </View>
      <FlatList
        data={DUMMY_DATA}
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
