import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://658c671c859b3491d3f606a0.mockapi.io';

export const getAllContactsAction = createAsyncThunk(
  'contacts/getAllContacts',

  async () => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      Notiflix.Notify.info('Something went wrong! Try again');
    }
  }
);

export const addContactAction = createAsyncThunk(
  'contacts/addContactPost',

  async info => {
    try {
      const response = await axios.post('/contacts', info);
      return response.data;
    } catch (error) {
      Notiflix.Notify.info('Something went wrong! Try again later');
    }
  }
);

export const deleteContactAction = createAsyncThunk(
  'contacts/deleteContact',

  async contactId => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      Notiflix.Notify.info('Something went wrong! Try again later');
    }
  }
);
