import React, {FC, createContext, useContext, useReducer} from 'react';
import {Data} from '../components/Expenses';

const DUMMY_DATA: Data[] = [
  {
    id: 'e1',
    description: 'Groceries',
    amount: 50,
    date: new Date('2023-02-22'),
  },
  {
    id: 'e2',
    description: 'A pair of shoes',
    amount: 39.29,
    date: new Date('2023-03-03'),
  },
  {
    id: 'e3',
    description: 'A pair of earrings',
    amount: 19.49,
    date: new Date('2023-03-06'),
  },
  {
    id: 'e4',
    description: 'A pair of oxfords',
    amount: 99.99,
    date: new Date('2023-03-01'),
  },
  {
    id: 'e5',
    description: 'Groceries',
    amount: 50,
    date: new Date('2023-03-02'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 39.29,
    date: new Date('2023-02-03'),
  },
  {
    id: 'e7',
    description: 'A pair of earrings',
    amount: 19.49,
    date: new Date('2023-02-15'),
  },
  {
    id: 'e8',
    description: 'A pair of oxfords',
    amount: 99.99,
    date: new Date('2023-03-05'),
  },
];

type ExpensesContextValue = {
  expenses: Data[];
  addExpense: (expense: Data) => void;
  updateExpense: (expense: Data) => void;
  deleteExpense: (id: string) => void;
};

enum ExpensesActionKind {
  ADD_EXPENSE = 'ADD_EXPENSE',
  UPDATE_EXPENSE = 'UPDATE_EXPENSE',
  DELETE_EXPENSE = 'DELETE_EXPENSE',
}

interface ExpensesState {
  expenses: Data[];
}

interface ExpensesAction {
  type: ExpensesActionKind;
  payload: Data;
}

const ExpensesContext = createContext<ExpensesContextValue>({
  expenses: [],
  addExpense: () => {},
  updateExpense: () => {},
  deleteExpense: () => {},
});

const expensesReducer = (state: ExpensesState, action: ExpensesAction) => {
  switch (action.type) {
    case ExpensesActionKind.ADD_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {...action.payload, id: Math.random().toString()},
        ],
      };
    case ExpensesActionKind.UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case ExpensesActionKind.DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(ex => ex.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const ExpensesProvider: FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [{expenses}, dispatch] = useReducer(expensesReducer, {
    expenses: DUMMY_DATA,
  });

  const addExpense = (expense: Data) => {
    dispatch({type: ExpensesActionKind.ADD_EXPENSE, payload: expense});
  };

  const updateExpense = (expense: Data) => {
    dispatch({type: ExpensesActionKind.UPDATE_EXPENSE, payload: expense});
  };

  const deleteExpense = (id: string) => {
    dispatch({type: ExpensesActionKind.DELETE_EXPENSE, payload: {id}});
  };
  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
      }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => {
  const {expenses, addExpense, updateExpense, deleteExpense} =
    useContext(ExpensesContext);

  return {expenses, addExpense, updateExpense, deleteExpense};
};

export default ExpensesProvider;
