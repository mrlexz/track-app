import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Data} from '.';
import {GlobalStyles} from '../../constants/styles';
import {getFormattedDate} from '../../utils/date';

const ExpensesListItem: FC<Omit<Data, 'id'>> = ({
  description,
  amount,
  date,
}) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensesListItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    backgroundColor: GlobalStyles.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
