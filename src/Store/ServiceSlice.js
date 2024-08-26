import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Laundry by Weight', description: 'Get your laundry done by weight, pay per kilogram.' },
  { id: 2, title: 'Laundry by Pieces', description: 'Perfect for delicate items, pay per piece of clothing.' },
  { id: 3, title: 'Pickup and Delivery', description: 'We pick up and deliver your laundry for added convenience.' },
];

const ServiceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
});

export default ServiceSlice.reducer;
