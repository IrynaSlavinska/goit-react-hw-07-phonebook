import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    deleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    addContactAction: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
