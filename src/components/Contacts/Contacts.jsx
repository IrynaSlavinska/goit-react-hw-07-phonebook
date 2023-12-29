import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';
import {
  getAllContactsAction,
  delContactDeleteAction,
} from '../../redux/contactsSlice';
import { getError, getIsLoading } from '../../redux/selectors';

import {
  List,
  Item,
  Container,
  Name,
  Number,
  DeleteContactBtn,
} from './Contacts.styled';
import { MdDelete } from 'react-icons/md';
import { useEffect } from 'react';

const Contacts = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsAction());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (filter.filter === '') return;

    const normilezedFilter = filter.toLowerCase().trim();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilezedFilter)
    );

    return visibleContacts;
  };

  const visibleContacts = getFilteredContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Container>
            <Name>{name}</Name>
            <Number>{number}</Number>
          </Container>
          <DeleteContactBtn
            type="button"
            onClick={() => {
              delContactDeleteAction();
            }}
          >
            <MdDelete />
          </DeleteContactBtn>
        </Item>
      ))}
    </List>
  );
};

export default Contacts;
