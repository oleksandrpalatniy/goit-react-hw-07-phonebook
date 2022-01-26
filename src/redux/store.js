import { configureStore } from '@reduxjs/toolkit';

import contactReducer from './contactReducer';
import { contactsApi } from './contacts';

const store = configureStore({
  reducer: {
    contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;
