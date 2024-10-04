import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import authMidReducer from "../features/authSliceMiddleware"; //!middleware ile olan kullanım
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//* redux persist
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)

//* redux toolkit store
const store = configureStore({
  reducer: {
    auth: persistedReducer, //* kalıcı hale gelmesini istediğimiz reducer'i store'a verdik
    // auth: authReducer,
    // auth:authMidReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

//* redux persist
export let persistor = persistStore(store)
export default store;
