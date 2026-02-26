import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
}

interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

// ✅ Async thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    return (await response.json()) as User[];
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      });
  },
});

export default usersSlice.reducer;