import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/sliceContacts';
import { Button, TextField } from '@mui/material';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(
      addContacts({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <TextField
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={name}
        // onChange={handleChange}
      />

      <label htmlFor="tel">Number</label>
      <TextField
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // value={number}
        // onChange={handleChange}
      />

      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default Form;
