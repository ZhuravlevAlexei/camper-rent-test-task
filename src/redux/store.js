import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

import campersReducer from "./campers/slice";

// import contactsReducer from "./contacts/slice";
// import filtersReducer from "./filters/slice";
// import authReducer from "./auth/slice";
// import storage from "redux-persist/lib/storage";

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };
// const persistedReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  campers: campersReducer,
  // favorites: persistedReducer,
  //   auth: persistedReducer,
  //   contacts: contactsReducer,
  //   filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);
