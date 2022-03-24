import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';

interface ContexProps {
  entries: Entry[];

  //Methods
  addNewEntry: (description: string) => void;
}

export const EntriesContext = createContext({} as ContexProps);
