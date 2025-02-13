import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILocationState {
  lat: number | null;
  lon: number | null;
}

const loadLocationFromStorage = (): ILocationState => {
  const storedData = localStorage.getItem('location');
  return storedData ? JSON.parse(storedData) : { lat: null, lon: null };
};

const initialState: ILocationState = loadLocationFromStorage();

export const locationSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<ILocationState>) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      localStorage.setItem('location', JSON.stringify(state));
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
