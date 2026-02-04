import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    instituteName: "",
    ownerName: "",
    designation: "",
    email: "",
    dob: "",
    mobile: "",
    alternateMobile: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    controllerName: "",
    showController: false,
    showDirector: false,
    controllerSignatureFile: null,
    logoFile: null,
    signatureFile: null
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
