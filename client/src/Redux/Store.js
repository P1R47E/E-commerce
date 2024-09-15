import { configureStore } from '@reduxjs/toolkit'
import figReducer from "./figSlice";
import{
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key:"root",
  version:1,
  storage,
};

const persistedReducer = persistReducer(persistConfig,figReducer);

export const store = configureStore({
  reducer: {fig:persistedReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    })
});

export let persistor = persistStore(store);