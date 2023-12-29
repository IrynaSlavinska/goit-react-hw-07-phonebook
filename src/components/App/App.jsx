import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import {
  Container,
  PartContainerForm,
  PartContainer,
  Title,
} from './App.styled';

export const App = () => {
  return (
    <Container>
      <PartContainerForm>
        <Title>Phonebook</Title>
        <ContactForm />
      </PartContainerForm>

      <PartContainer>
        <Title>Contacts</Title>
        <Filter />
        <Contacts />
      </PartContainer>
    </Container>
  );
};
