import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./slice/songSlice";
import movieSlice from "./slice/movieSlice";

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: movieSlice.reducer
  }
});

export { store };
export const { addSong, removeSong, resetSongs } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovie } = movieSlice.actions;
