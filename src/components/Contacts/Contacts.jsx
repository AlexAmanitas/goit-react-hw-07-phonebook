import { IconButton, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  let contacts;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt.currentTarget.id));
  };
  // let contacts = items;
  const filter = useSelector(state => state.filter.value);
  if (filter !== '') {
    contacts = items.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
  console.log(contacts);

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {items.map(el => {
        const { name, phone, id } = el;
        return (
          <ListItem key={id}>
            <Typography variant="body1" component="span" sx={{ mr: '10px' }}>
              {name}
            </Typography>
            <Typography variant="body1" component="span" sx={{ mr: '10px' }}>
              {phone}
            </Typography>
            <IconButton id={id} type="button" onClick={handleOnClick}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Contacts;
