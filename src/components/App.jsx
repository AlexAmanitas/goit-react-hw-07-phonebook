import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import { Box, Typography } from '@mui/material';

export const App = () => {
  return (
    <Box sx={{ pt: '20px' }}>
      <Typography component="h2" variant="h4" sx={{ mb: '10px' }}>
        Phonebook
      </Typography>
      <Form />
      <Typography component="h2" variant="h4" sx={{ mb: '10px', mt: '20px' }}>
        Contacts
      </Typography>
      <Filter />
      <Contacts />
    </Box>
  );
};

//
