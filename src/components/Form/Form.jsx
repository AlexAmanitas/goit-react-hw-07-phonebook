import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';
import uniqid from 'uniqid';
import { TheForm, Label, Input, SubmitBtn } from './Form.styled';

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
    <TheForm action="" onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="tel">Number</Label>
      <Input
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </TheForm>
  );
};

export default Form;
