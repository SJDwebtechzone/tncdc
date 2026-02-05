import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    batches: []
};

const batchSlice = createSlice({
    name: 'batches',
    initialState,
    reducers: {
        addBatch: (state, action) => {
            state.batches.push({ ...action.payload, id: Date.now() });
        },
        deleteBatch: (state, action) => {
            state.batches = state.batches.filter(b => b.id !== action.payload);
        },
        updateBatch: (state, action) => {
            const index = state.batches.findIndex(b => b.id === action.payload.id);
            if (index !== -1) {
                state.batches[index] = action.payload;
            }
        }
    }
});

export const { addBatch, deleteBatch, updateBatch } = batchSlice.actions;
export default batchSlice.reducer;
