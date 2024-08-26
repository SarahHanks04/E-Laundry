import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, quote: 'Excellent service, always on time!', author: 'John Doe' },
  { id: 2, quote: 'My clothes have never been cleaner!', author: 'Jane Smith' },
  { id: 3, quote: 'Affordable and reliable. Highly recommended.', author: 'Michael Lee' },
];

const TestimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {},
});

export default TestimonialSlice.reducer;
