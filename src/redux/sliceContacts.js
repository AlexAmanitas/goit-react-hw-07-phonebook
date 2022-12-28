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

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: handleFulfilled,
    [fetchContacts.rejected]: handleRejected,

    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,

    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, action) {
      console.log('del', action.payload);
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContacts.rejected]: handleRejected,

    [filterContacts.pending]: handlePending,
    [filterContacts.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [filterContacts.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// reducers: {
//   addContacts(state, action) {
//     state.push(action.payload);
//   },

//   deleteContacts(state, action) {
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
// },

// export const { addContacts, deleteContacts } = contactsSlice.actions;
