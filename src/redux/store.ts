import { combineReducers, createStore } from "redux";
import { movieReducer } from "./movie/reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
