import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { getContacts } from '../../redux/selectors';
import { addContactPostAction } from '../../redux/contactsSlice';

import { Form, Label, Input, AddContactBtn } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(contact => contact.name === name);
    if (isExist) {
      return Notiflix.Notify.warning('Contact is already in your phonebook', {
        timeout: 3000,
      });
    }

    dispatch(addContactPostAction({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          placeholder="Enter name"
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
          placeholder="Enter tel"
        />
      </Label>

      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
};

export default ContactForm;
