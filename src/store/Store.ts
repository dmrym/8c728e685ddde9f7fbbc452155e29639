import { configureStore } from '@reduxjs/toolkit';
import ProductSliceReducer from './AppSlice';
import * as ProductSlices from './AppSlice';

export const Store = configureStore({
  reducer: {
    ProductsState: ProductSliceReducer
  },
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const Actions = {
  ...ProductSlices
}