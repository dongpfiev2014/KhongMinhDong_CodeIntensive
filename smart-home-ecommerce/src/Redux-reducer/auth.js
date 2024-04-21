import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: undefined,
  isLoading: false,
};

const API_USERS_URL = "https://6623cafa3e17a3ac8470401a.mockapi.io/api/users";
const API_LOGIN_URL = "https://dummyjson.com/auth/login";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const token = fakeToken();
      const response = await axios.post(API_USERS_URL, {
        ...userData,
        token: token,
      });
      localStorage.setItem("accessToken", token);
      return response.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(API_LOGIN_URL, userData);
      console.log(response);
      if (response) {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.token);
      }
      return response.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken") ?? "";
      console.log(token);
      const response = await axios.get(API_USERS_URL, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (response) {
        console.log(response);
      }
      return response.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.currentUser = action.payload;
      state.currentUser = action.meta.arg.username;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.currentUser = action.payload;
      state.currentUser = action.meta.arg.username;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getCurrentUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.currentUser = action.payload;
      state.currentUser = action.payload;
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.currentUser = null;
    });
  },
});

const fakeToken = () => {
  return Math.random().toString(36).substring(2);
};

export default authSlice.reducer;
