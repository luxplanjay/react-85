import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';

const myMiddlware1 = store => next => action => {
  // console.log('myMiddlware1 ', action);
  next(action);
};

const myMiddleare2 = store => next => action => {
  // console.log('myMiddlware2 ', action);
  next(action);
};

const gaMiddleware = store => next => action => {
  console.log(action);

  if (action?.meta?.ga) {
    console.log(`Send ${action.type} to GA`);
    // GA.send(action);
  }

  next(action);
};

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
  middleware(getDefaultMiddleware) {
    const defaultMd = getDefaultMiddleware();
    return [...defaultMd, myMiddlware1, myMiddleare2, gaMiddleware];
  },
});

// const fetchTasks = () => async dispatch => {
//   try {
//     const response = await axios.get('/tasks');
//   } catch (e) {}
// };

// dispatch(fetchTasks());
// dispatch({});

// const reduxThunkMd = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//     return;
//   }

//   next(action);
// };
