import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/themeSlice';
import locationSlice from './features/locationSlice';
import { weatherApi } from '../api/weather/weatherApi';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    location: locationSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
