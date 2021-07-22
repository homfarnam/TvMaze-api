import {
  createAsyncThunk,
  createSlice,
  Slice,
  SliceCaseReducers
} from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Reducer } from 'react';

export const getEpisode: any = createAsyncThunk(
  'episodesData',
  async (epId) => {
    return fetch(`https://api.tvmaze.com/episodes/${epId}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

interface StateTypes {
  episode: {
    name: string;
    summary: any;
    image: {
      medium: string;
      original: string;
    };
    _links: {
      previousepisode: {
        href: string;
      };
    };
  }[];
  loading: boolean;
  hasErrors: boolean;
}

const initialState: StateTypes = {
  episode: [],
  loading: false,
  hasErrors: false
};

export const episode: Slice<
  StateTypes,
  SliceCaseReducers<StateTypes>,
  'episodeData'
> = createSlice({
  name: 'episodeData',
  initialState,
  reducers: {},
  extraReducers: {
    [getEpisode.pending]: (state, action) => {
      state.loading = true;
    },
    [getEpisode.fulfilled]: (state, action) => {
      state.episode = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [getEpisode.rejected]: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const episodeActions = episode.actions;

export const episodesSelector = (state: StateTypes) => state;

export default episode.reducer;
