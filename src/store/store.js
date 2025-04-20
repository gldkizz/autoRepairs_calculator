import { configureStore } from "@reduxjs/toolkit";

import appReducer from './slices/app/app.slice';
import { supabaseApi } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        app: appReducer,
        [supabaseApi.reducerPath]: supabaseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseApi.middleware)
})

setupListeners(store.dispatch)