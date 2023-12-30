import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://658c671c859b3491d3f606a0.mockapi.io';

export const getAllContactsAction = createAsyncThunk(
  'contacts/getAllContacts',

  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      Notiflix.Notify.info('Something went wrong! Try again');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactAction = createAsyncThunk(
  'contacts/addContactPost',

  async (info, thunkApi) => {
    try {
      const response = await axios.post('/contacts', info);
      return response.data;
    } catch (error) {
      Notiflix.Notify.info('Something went wrong! Try again later');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactAction = createAsyncThunk(
  'contacts/deleteContact',

  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      Notiflix.Notify.info('Something went wrong! Try again later');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
