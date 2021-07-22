import { EpisodesListType } from './../../types/types.d';
import {
  createAsyncThunk,
  createSlice,
  Slice,
  SliceCaseReducers
} from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Reducer } from 'react';

export const getEpisodes: any = createAsyncThunk('episodesData', async () => {
  return fetch('https://api.tvmaze.com/shows/6771/episodes')
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

interface ShowTypes {
  episodes: EpisodesListType;
  loading: boolean;
  hasErrors: boolean;
}

const initialState: ShowTypes = {
  episodes: [],
  loading: false,
  hasErrors: false
};

export const allEpisodes: Slice<
  ShowTypes,
  SliceCaseReducers<ShowTypes>,
  'episodesData'
> = createSlice({
  name: 'episodesData',
  initialState,
  reducers: {},
  extraReducers: {
    [getEpisodes.pending]: (state, action) => {
      state.loading = true;
    },
    [getEpisodes.fulfilled]: (state, action) => {
      state.episodes = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [getEpisodes.rejected]: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const episodeActions = allEpisodes.actions;

export const episodesSelector = (state: ShowTypes) => state;

export default allEpisodes.reducer;
