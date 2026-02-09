import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    holidays: [],
    leaves: [],
    attendanceRecords: [],
    weekOffDays: ['Saturday', 'Sunday']
};

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        addHoliday: (state, action) => {
            state.holidays.push({ ...action.payload, id: Date.now() });
        },
        deleteHoliday: (state, action) => {
            state.holidays = state.holidays.filter(h => h.id !== action.payload);
        },
        addLeave: (state, action) => {
            state.leaves.push({ ...action.payload, id: Date.now(), status: 'Pending' });
        },
        deleteLeave: (state, action) => {
            state.leaves = state.leaves.filter(l => l.id !== action.payload);
        },
        updateWeekOff: (state, action) => {
            state.weekOffDays = action.payload;
        }
    }
});

export const { addHoliday, deleteHoliday, addLeave, deleteLeave, updateWeekOff } = attendanceSlice.actions;
export default attendanceSlice.reducer;
