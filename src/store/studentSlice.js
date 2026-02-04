import { createSlice } from '@reduxjs/toolkit';

// Helper to get date string for relative days from now
const getDateFromNow = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
};

const initialState = {
    students: [],
    enquiries: [],
    followUps: [],
    notifications: [],
    popups: []
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
        updateStudent: (state, action) => {
            const index = state.students.findIndex(s => s.id === action.payload.id);
            if (index !== -1) {
                state.students[index] = action.payload;
            }
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter(s => s.id !== action.payload);
        },
        addEnquiry: (state, action) => {
            if (!state.enquiries) state.enquiries = [];
            state.enquiries.push({ ...action.payload, id: Date.now(), status: "New", created: new Date().toLocaleDateString() });
        },
        addFollowUp: (state, action) => {
            if (!state.followUps) state.followUps = [];
            state.followUps.push({ ...action.payload, id: Date.now(), status: "Pending" });
        },
        addNotification: (state, action) => {
            if (!state.notifications) state.notifications = [];
            state.notifications.push({ ...action.payload, id: Date.now(), created: new Date().toLocaleDateString() });
        },
        deleteNotification: (state, action) => {
            state.notifications = state.notifications.filter(n => n.id !== action.payload);
        },
        addPopup: (state, action) => {
            if (!state.popups) state.popups = [];
            state.popups.push({ ...action.payload, id: Date.now(), created: new Date().toLocaleDateString() });
        },
        deletePopup: (state, action) => {
            state.popups = state.popups.filter(p => p.id !== action.payload);
        }
    }
});

export const { addStudent, updateStudent, deleteStudent, addEnquiry, addFollowUp, addNotification, deleteNotification, addPopup, deletePopup } = studentSlice.actions;
export default studentSlice.reducer;
