import {configureStore} from '@reduxjs/toolkit';
import reduxStorage from './storage';
import {
  persistStore,
  persistReducer,
  PURGE,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
} from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: [],
  whitelist: ['chat'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PURGE, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistedStore = persistStore(store);
