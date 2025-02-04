import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILocationState {
  city: string;
  latitude: number | null;
  longitude: number | null;
}

const loadLocationFromStorage = (): ILocationState => {
  const storedData = localStorage.getItem('location');
  return storedData
    ? JSON.parse(storedData)
    : { city: '', latitude: null, longitude: null };
};

const initialState: ILocationState = loadLocationFromStorage();

export const locationSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<ILocationState>) => {
      state.city = action.payload.city;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      localStorage.setItem('location', JSON.stringify(state));
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
