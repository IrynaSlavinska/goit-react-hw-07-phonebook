import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { Container, PartContainer, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PartContainer>
        <Title>Phonebook</Title>
        <ContactForm />
      </PartContainer>

      <PartContainer>
        <Title>Contacts</Title>
        <Filter />
        <Contacts />
      </PartContainer>
    </Container>
  );
};
