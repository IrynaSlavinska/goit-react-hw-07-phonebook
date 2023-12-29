import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';
import { deleteContactAction } from '../../redux/contactsSlice';
import {
  List,
  Item,
  Container,
  Name,
  Number,
  DeleteContactBtn,
} from './Contacts.styled';
import { MdDelete } from 'react-icons/md';

const Contacts = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const deleteContact = delId => dispatch(deleteContactAction(delId));

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
          <DeleteContactBtn type="button" onClick={() => deleteContact(id)}>
            <MdDelete />
          </DeleteContactBtn>
        </Item>
      ))}
    </List>
  );
};

export default Contacts;
