import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialAppState = {
    courses: [],
    categories: [],
    events: [],
    posts: [],
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setData: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setData } = appSlice.actions;

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
    },
});
