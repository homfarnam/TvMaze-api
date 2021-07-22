import allEpisodes from '../allEpisodes/allEpisodes';
import episodesSlice from '../showData/index';
import episode from 'redux/episode/episode';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    show: episodesSlice,
    episodes: allEpisodes,
    episode: episode
  }
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
