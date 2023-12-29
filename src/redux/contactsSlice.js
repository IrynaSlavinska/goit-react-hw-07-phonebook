import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContactsAction,
  addContactAction,
  deleteContactAction,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getAllContactsAction.pending, handlePending)
      .addCase(getAllContactsAction.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllContactsAction.rejected, handleError)

      .addCase(addContactAction.pending, handlePending)
      .addCase(addContactAction.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactAction.rejected, handleError)

      .addCase(deleteContactAction.pending, handlePending)
      .addCase(deleteContactAction.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactAction.rejected, handleError);
  },
});

export const contactsReducer = contactsSlice.reducer;
