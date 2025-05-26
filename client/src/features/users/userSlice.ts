import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string | undefined;
  name: string | undefined;
  isAuthenticated?: boolean;
}

const initialState: UserState = {
  id: undefined,
  name: undefined,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signIn: (state: UserState, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAuthenticated = true;
    },
  },
});

export const { signIn } = userSlice.actions;
export default userSlice.reducer;
