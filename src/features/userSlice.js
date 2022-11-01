import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "./userServices";

const initialState = {
  isLoggedIn: false,
  profile: null,
  user: null,
  error: {},
  loading: false,
  success: false,
};
export const getCurrentUser = createAsyncThunk("user", async () => {
  return await userService.getCurrentProfile();
});
export const postUser = createAsyncThunk("user/post", async () => {
  return await userService.postUser();
});
export const editUser = createAsyncThunk("user/edit", async () => {
  return await userService.editUser();
});
export const deleteUser = createAsyncThunk("user/delete", async () => {
  return await userService.deleteUser();
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
      .addCase(postUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.success = true;
      })
      .addCase(postUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.user = null;
      })
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
      })
      .addCase(editUser.pending, (state, { payload }) => {})
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.success = true;
      })
      .addCase(editUser.rejected, (state, { payload }) => {})
      .addCase(deleteUser.pending, (state, { payload }) => {})
      .addCase(deleteUser.fulfilled, (state, { payload }) => {})
      .addCase(deleteUser.rejected, (state, { payload }) => {});
  },
});

export const userReducer = userSlice.reducer;
export const { setLoggedIn } = userSlice.actions;
