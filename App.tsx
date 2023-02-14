import React from 'react';
// import {StyleSheet} from 'react-native';
import Navigation from './navigation';
import ExpensesProvider from './stores/ExpensesContext';

function App(): JSX.Element {
  return (
    <ExpensesProvider>
      <Navigation />
    </ExpensesProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
