import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock async thunk to simulate fetching data from an API
export const fetchDashboardData = createAsyncThunk(
    'dashboard/fetchData',
    async () => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Return mock data
        return {
            stats: {
                admissions: 1250,
                enquiries: 450,
                franchises: 12,
                courses: 35
            },
            topCards: {
                franchiseAdmission: 85,
                remainingAdmission: 115,
                registeredToday: 24
            },
            wallet: {
                fees: 2500000,
                expense: 1200000,
                profit: 1300000,
                credits: 50000
            },
            fees: {
                total: 5000000,
                pending: 2500000,
                paid: 2500000
            },
            examRequests: {
                total: 150,
                pending: 45,
                approved: 105
            },
            certificates: {
                total: 120,
                pending: 20,
                approved: 100
            },
            enquiryStatus: {
                total: 450,
                pending: 120,
                today: 15
            }
        };
    }
);

const initialState = {
    data: {
        stats: { admissions: 0, enquiries: 0, franchises: 0, courses: 0 },
        topCards: { franchiseAdmission: 0, remainingAdmission: 0, registeredToday: 0 },
        wallet: { fees: 0, expense: 0, profit: 0, credits: 0 },
        fees: { total: 0, pending: 0, paid: 0 },
        examRequests: { total: 0, pending: 0, approved: 0 },
        certificates: { total: 0, pending: 0, approved: 0 },
        enquiryStatus: { total: 0, pending: 0, today: 0 }
    },
    loading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default dashboardSlice.reducer;
