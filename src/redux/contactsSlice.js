import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsFetch,
  addContactPost,
  delContactDelete,
} from 'services/api';

export const getAllContactsAction = createAsyncThunk(
  'contacts/getAllContacts',
  async () => {
    const data = await getContactsFetch();
    return data;
  }
);

export const addContactPostAction = createAsyncThunk(
  'contacts/addContactPost',
  async () => {
    const data = await addContactPost();
    return data;
  }
);

export const delContactDeleteAction = createAsyncThunk(
  'contacts/delContactDelete',
  async () => {
    const data = await delContactDelete();
    return data;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getAllContactsAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllContactsAction.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllContactsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContactPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(delContactDelete.pending, state => {
        state.isLoading = true;
      })
      .addCase(delContactDelete.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(delContactDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
