import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roles: [],
};

const roleSlice = createSlice({
    name: 'roles',
    initialState,
    reducers: {
        addRole: (state, action) => {
            state.roles.push({
                id: Date.now(),
                createdAt: new Date().toISOString().split('T')[0],
                ...action.payload
            });
        },
        deleteRole: (state, action) => {
            state.roles = state.roles.filter(role => role.id !== action.payload);
        },
        updateRole: (state, action) => {
            const index = state.roles.findIndex(role => role.id === action.payload.id);
            if (index !== -1) {
                state.roles[index] = { ...state.roles[index], ...action.payload };
            }
        }
    }
});

export const { addRole, deleteRole, updateRole } = roleSlice.actions;
export default roleSlice.reducer;
