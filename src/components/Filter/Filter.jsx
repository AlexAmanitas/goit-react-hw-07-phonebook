import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { filterContacts } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/sliceFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <Box>
      <TextField
        variant="outlined"
        label="Find contacts by name"
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Filter;
