import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "";

const initialState = {
  isLoggedIn: false,
  profile: null,
  error: {},
  loading: false,
  success: false,
};
export const getCurrentUser = createAsyncThunk("user", async () => {
  return await getCurrentProfile();
});
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setLoggedIn: (state, { payload }) => {
      state.isLoggedIn = true;
      state.profile = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.profile = payload;
        state.success = true;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.profile = null;
      });
  },
});

const getCurrentProfile = async () => {
  try {
    const res = await fetch(API_URL, { headers: {} });
    return res.data;
  } catch (error) {
    const msg = error.response.data;
    const msgStatus = error.response.status;

    return { msg, msgStatus };
  }
};

export const userReducer = userSlice.reducer;
export const { setLoggedIn } = userSlice.actions;
