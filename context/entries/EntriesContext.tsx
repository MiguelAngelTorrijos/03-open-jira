import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';

interface ContexProps {
  entries: Entry[];

  //Methods
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
}

export const EntriesContext = createContext({} as ContexProps);
