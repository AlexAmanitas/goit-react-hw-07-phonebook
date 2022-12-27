import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';
import { Box, Button, TextField } from '@mui/material';
import uniqid from 'uniqid';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(
      addContacts({
        id: uniqid(),
        name: form.elements.name.value,
        phone: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <Box component="form" action="" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        sx={{ mb: '20px' }}
        // value={name}
        // onChange={handleChange}
      />

      {/* <label htmlFor="tel">Number</label> */}
      <TextField
        label="Number"
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        sx={{ mb: '20px' }}
        // value={number}
        // onChange={handleChange}
      />

      <Button type="submit">Add contact</Button>
    </Box>
  );
};

export default Form;
