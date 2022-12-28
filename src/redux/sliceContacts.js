import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
  filterContacts,
} from './operations';

// const testContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-5', name: 'Edem Cldfmts', number: '645-17-79' },
//   { id: 'id-6', name: 'Alec Mjduels', number: '645-17-79' },
//   { id: 'id-7', name: 'Karl Fridr', number: '645-17-79' },
//   { id: 'id-8', name: 'Joiur Masuro', number: '645-17-79' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled](state, action) {
      console.log('del', action.payload);
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [filterContacts.pending](state) {
      state.isLoading = true;
    },
    [filterContacts.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [filterContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },

  // reducers: {
  //   addContacts(state, action) {
  //     state.push(action.payload);
  //   },

  //   deleteContacts(state, action) {
  //     const index = state.findIndex(task => task.id === action.payload);
  //     state.splice(index, 1);
  //   },
  // },
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
