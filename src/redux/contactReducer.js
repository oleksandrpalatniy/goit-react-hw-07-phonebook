import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterCon } from './contactActions';

const initialState = {
  contacts: {
    filter: '',
  },
};

const contacts = createReducer(initialState, {
  [filterCon.type]: (state, action) => {
    state.contacts.filter = action.payload;
  },
});

export default combineReducers({
  contacts,
});
