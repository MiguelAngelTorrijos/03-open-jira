import { List, Paper } from '@mui/material';
import { FC, useContext, useMemo } from 'react';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './';
import { EntriesContext } from '../../context/entries/EntriesContext';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          '&::-webkit-scrollbar': { display: 'none' },
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '1px 4px',
        }}
      >
        <List sx={{ opaciry: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
