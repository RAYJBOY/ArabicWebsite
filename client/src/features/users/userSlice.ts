import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string | undefined;
  name: string | undefined;
  token: string | undefined;
}

const initialState: UserState = {
  id: undefined,
  name: undefined,
  token: undefined,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserAccessToken: (state: UserState, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
  },
});

export const { setUserAccessToken } = userSlice.actions;
export default userSlice.reducer;
