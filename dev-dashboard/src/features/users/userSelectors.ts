import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const selectUsersState = (state: RootState) => state.users;

export const selectUsers = createSelector(
  [selectUsersState],
  (users) => users.data
);

export const selectUserCount = createSelector(
  [selectUsers],
  (users) => users.length
);