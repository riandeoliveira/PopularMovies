import { store } from "redux/store";

export type RootState = ReturnType<typeof store.getState>;

export interface PayloadAction<T> {
  type: string;
  payload: T;
}
