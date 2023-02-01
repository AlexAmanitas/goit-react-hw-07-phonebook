import {
  ContactList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contacts.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  filterContacts,
} from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

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
    dispatch(deleteContacts(evt.currentTarget.id));
  };

  console.log('contacts');

  return (
    <ContactList>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {items.map(el => {
        const { name, phone, id } = el;
        return (
          <ContactListItem key={id} alignItems="flex-start">
            <ContactName variant="body1" component="span" sx={{ mr: '10px' }}>
              {name}
            </ContactName>
            <ContactNumber variant="body1" component="span" sx={{ mr: '10px' }}>
              {phone}
            </ContactNumber>
            <DeleteButton id={id} type="button" onClick={handleOnClick}>
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

export default Contacts;
