import React, {FC} from 'react';
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList, RootTabParamList} from './types';
import AllExpenses from '../screens/AllExpenses';
import RecentExpenses from '../screens/RecentExpenses';
import ManageExpenses from '../screens/ManageExpenses';
import {GlobalStyles} from '../constants/styles';
import {Pressable, StyleSheet, Text} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const ExpensesOverview = ({}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: GlobalStyles.colors.white,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => (
          <Pressable
            onPress={() => {
              navigation.navigate('ManageExpenses', {
                expenseId: undefined,
              });
            }}>
            <Text style={styles.buttonAdd}>Add</Text>
          </Pressable>
        ),
      }}>
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
        }}
      />
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
        }}
      />
    </BottomTab.Navigator>
  );
};

const Navigation: FC<{
  children?: React.ReactNode;
}> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: GlobalStyles.colors.white,
        }}>
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpenses}
          options={{
            title: 'Manage Expenses',
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  buttonAdd: {
    marginRight: 12,
    color: GlobalStyles.colors.white,
  },
});
