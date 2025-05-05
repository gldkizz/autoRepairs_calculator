import {createAsyncThunk, createSlice} from  '@reduxjs/toolkit'
import { supabase } from '../../../supabaseSettings/supabaseClient';

// const initialState = {
//     isInitialized: true,
// }

const archiveSlice = createSlice({
    name: 'archive',
    initialState: {
        filters: {
            dateRange: { start: null, end: null },
            status: 'all',
            searchQuery: '',
          },
          sort: {
            field: 'date',
            direction: 'desc',
          },
          pagination: {
            currentPage: 1,
            pageSize: 20,
          },
          ui: {
            isFiltersOpen: false,
            selectedRows: [],
          },
    },
    reducers: {}
})

export default archiveSlice.reducer