import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/themeSlice';
import locationSlice from './features/locationSlice';
import weatherSlice from './features/weatherSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    location: locationSlice,
    weather: weatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
