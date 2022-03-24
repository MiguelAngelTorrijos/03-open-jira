import { FC, useReducer } from 'react';
import { EntriesContext } from './';
import { entriesReducer } from './entriesReducer';
import { Entry } from '../../interfaces/entry';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Pendiente: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'En progreso: Ea aliqua Lorem ut ad. Ad incididunt do aute ex aliquip dolor esse aliquip quis elit. Enim id culpa enim laboris esse ullamco in sunt aliqua.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Terminado: Aliqua nulla est ea amet aliqua deserunt enim sint voluptate proident ipsum laborum ut. Fugiat culpa enim excepteur do non et fugiat elit officia tempor qui reprehenderit proident est. Mollit irure deserunt tempor quis non qui minim.',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //Metrhod
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
