import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  filterContacts,
} from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactList } from './Contacts.styled';
import ContactsListItem from 'components/ContactsItem';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (filter === '') {
      dispatch(fetchContacts());
    } else {
      dispatch(filterContacts(filter));
    }
  }, [dispatch, filter]);

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt));
  };

  return (
    <ContactList>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {items.map(({ id, name, phone }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={phone}
            onDelete={handleOnClick}
          ></ContactsListItem>
        );
      })}
    </ContactList>
  );
};

export default Contacts;
