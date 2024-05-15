import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TeamsState {
  open: boolean;
  dndData: any;
}

const initialState: TeamsState = {
  open: false,
  dndData: JSON.parse(localStorage.getItem("dndCreated") || "[]") as any[],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeams: (state, action) => {
      state.dndData = action.payload;
    },
  },
});

export const { addTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
