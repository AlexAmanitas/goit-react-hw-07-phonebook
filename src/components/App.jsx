import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};

//
