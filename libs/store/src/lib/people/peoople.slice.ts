import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { PersonEntity } from '@nx-monorepo-rn-boilerplate/models';
import {
  fetchRandomPeople, mapApiResponseToPerson,
} from '@nx-monorepo-rn-boilerplate/services';
import { RandomPeopleResponse } from 'libs/services/src/lib/models/ramdom-people';

export const PEOPLE_FEATURE_KEY = 'People';

export interface PeopleState {
  people: PersonEntity[];
}

export const initialPeopleState: PeopleState = {
  people: [],
};

export const fetchPeople = createAsyncThunk('people/fetchPeople', async () => {
  const response: RandomPeopleResponse = await fetchRandomPeople();

  const mappinPeople: PersonEntity[] = response.results.map(mapApiResponseToPerson);

  return mappinPeople;
});

export const peopleSlice = createSlice({
  name: PEOPLE_FEATURE_KEY,
  initialState: initialPeopleState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.people = action.payload;
    });
  },
});

export const peopleReducer = peopleSlice.reducer;

export const peopleActions = { fetchPeople, ...peopleSlice.actions };
