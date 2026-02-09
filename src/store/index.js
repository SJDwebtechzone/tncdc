import { configureStore, createSlice } from '@reduxjs/toolkit';
import dashboardReducer from './dashboardSlice';
import studentReducer from './studentSlice';
import courseReducer from './courseSlice';
import batchReducer from './batchSlice';
import feeReducer from './feeSlice';
import profileReducer from './profileSlice';
import attendanceReducer from './attendanceSlice';
import websiteReducer from './websiteSlice';
import roleReducer from './roleSlice';


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
        dashboard: dashboardReducer,
        students: studentReducer,
        courses: courseReducer,
        batches: batchReducer,
        fees: feeReducer,
        profile: profileReducer,
        attendance: attendanceReducer,
        website: websiteReducer,
        roles: roleReducer,
    },
});

