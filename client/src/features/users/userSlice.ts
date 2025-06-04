import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string | undefined;
  name: string | undefined;
  isAdmin: boolean | undefined;
}

const initialState: UserState = {
  id: undefined,
  name: undefined,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signIn: (state: UserState, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

export const { signIn } = userSlice.actions;
export default userSlice.reducer;
