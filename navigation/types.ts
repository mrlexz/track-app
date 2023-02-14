import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  ManageExpenses: {
    expenseId?: string;
  };
  ExpensesOverview: undefined;
};
export type RootTabParamList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

export type ManageExpensesScreenProp = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ManageExpenses'>;
  route: RouteProp<RootStackParamList, 'ManageExpenses'>;
};
