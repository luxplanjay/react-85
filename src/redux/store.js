import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
});
