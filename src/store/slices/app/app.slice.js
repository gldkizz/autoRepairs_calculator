import {createSlice} from  '@reduxjs/toolkit'

const initialState = {
    isInitialized: true,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
    },
})

export default appSlice.reducer