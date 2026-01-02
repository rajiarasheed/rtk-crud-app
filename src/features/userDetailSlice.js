import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, rejectWithValue) => {
    try {
      const response = await fetch(
        "https://695268843b3c518fca128d1f.mockapi.io/crud",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await response.JSON();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder)=> {
    builder
    .addCase(createUser.pending,(state) => {
      state.loading = true;
    })
    .addCase(createUser.fulfilled,(state,action) => {
      state.loading = false;
      state.users.push(action.payload)
    })
    .addCase(createUser.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })
  }

});

export default userDetail.reducer;
