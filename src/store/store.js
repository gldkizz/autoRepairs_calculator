import { configureStore } from "@reduxjs/toolkit";

import archiveReducer from './slices/app/app.slice';
import { supabaseApi } from "../api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { archiveApi } from "../api/archiveSlice";

export const store = configureStore({
    reducer: {
        archive: archiveReducer,
        [supabaseApi.reducerPath]: supabaseApi.reducer,
        [archiveApi.reducerPath]: archiveApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(supabaseApi.middleware, archiveApi.middleware)
})

setupListeners(store.dispatch)