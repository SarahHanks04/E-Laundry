import { configureStore } from '@reduxjs/toolkit';
import ServiceReducer from './ServiceSlice';
import TestimonialReducer from './TestimonialSlice';


export const store = configureStore({
  reducer: {
    services: ServiceReducer,
    testimonials: TestimonialReducer,
  },
});
