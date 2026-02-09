import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions: [],
    upcomingInstallments: [],
    paidInstallments: []
};

const feeSlice = createSlice({
    name: 'fees',
    initialState,
    reducers: {
        addTransaction: (state, action) => {
            state.transactions.push({ ...action.payload, id: Date.now() });
        }
    }
});

export const { addTransaction } = feeSlice.actions;
export default feeSlice.reducer;
