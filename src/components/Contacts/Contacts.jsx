import { List, ListItem, ListItemButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/sliceContacts';

const Contacts = () => {
  let contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt.currentTarget.id));
  };

  const filter = useSelector(state => state.filter.value);
  if (filter !== '')
    contacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <List>
      {contacts.map(el => {
        const { name, number, id } = el;
        return (
          <ListItem key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <ListItemButton id={id} type="button" onClick={handleOnClick}>
              Delete
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Contacts;
