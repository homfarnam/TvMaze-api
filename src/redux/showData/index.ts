import {
  createAsyncThunk,
  createSlice,
  Slice,
  SliceCaseReducers
} from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Reducer } from 'react';

export const getData: any = createAsyncThunk('Get_Data', async () => {
  return fetch('https://api.tvmaze.com/shows/6771')
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

interface ShowTypes {
  myShow: {
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

const initialState: ShowTypes = {
  myShow: [],
  loading: false,
  hasErrors: false
};

export const episodesSlice: Slice<
  ShowTypes,
  SliceCaseReducers<ShowTypes>,
  'showData'
> = createSlice({
  name: 'showData',
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.myShow = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    [getData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const episodeActions = episodesSlice.actions;

export const episodesSelector = (state: ShowTypes) => state;

export default episodesSlice.reducer;
