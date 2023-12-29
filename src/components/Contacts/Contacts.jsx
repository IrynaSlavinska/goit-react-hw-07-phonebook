import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';
import {
  getAllContactsAction,
  deleteContactAction,
} from '../../redux/contactsOperations';
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
import { RiContactsFill } from 'react-icons/ri';
import { useEffect } from 'react';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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
      {isLoading && !error && <p>Loading...</p>}
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <RiContactsFill />
          <Container>
            <Name>{name}</Name>
            <Number>{number}</Number>
          </Container>
          <DeleteContactBtn
            type="button"
            onClick={() => {
              dispatch(deleteContactAction(id));
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
