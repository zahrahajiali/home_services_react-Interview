import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { servisesApi } from "../services/services";
import { zonesApi } from "../services/zones";
import { chooseApi } from "../services/choose";
const rootReducer = combineReducers({
  [servisesApi.reducerPath]: servisesApi.reducer,
  [zonesApi.reducerPath]: zonesApi.reducer,
  [chooseApi.reducerPath]: chooseApi.reducer,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      servisesApi.middleware,
      zonesApi.middleware,
      chooseApi.middleware,
    ]),

});
