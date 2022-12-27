import { Box, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/sliceFilter';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  const filter = useSelector(state => state.filter.value);

  return (
    <Box>
      <label htmlFor="filter">Find contacts by name</label>
      <TextField
        id="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Filter;
