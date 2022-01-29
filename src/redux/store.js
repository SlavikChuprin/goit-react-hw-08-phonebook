import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsApi } from './contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import filter from './contacts/reducer';
import { authReducer } from './auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filterValue: filter,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
