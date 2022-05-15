import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductModel } from '../models'

type StateType = {
  Products: IProductModel[] | null
  FilteredProducts: IProductModel[] | null
  SearchKey: string
  SelectedProduct: IProductModel | null
  ModalVisible: boolean
  PageSize: number
  Currentpage: number
};

const initialState: StateType = {
  Products: null,
  FilteredProducts: null,
  SearchKey: "",
  SelectedProduct: null,
  ModalVisible: false,
  PageSize: 10,
  Currentpage: 1
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: StateType, action: PayloadAction<IProductModel[]>) => {
      state.Products = action.payload;
      state.FilteredProducts = action.payload;
    },
    setSearch: (state: StateType, action: PayloadAction<string>) => {
      if (state.Products) {
        state.SearchKey = action.payload;
        state.FilteredProducts = state.Products.filter(
          (product) => product.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
        );
        if (Math.ceil(state.FilteredProducts.length / state.PageSize) < state.Currentpage) {
          state.Currentpage = 1
        }
      }
    },
    setSelectedProduct: (state: StateType, action: PayloadAction<IProductModel>) => {
      state.SelectedProduct = action.payload
    },
    setModalVisible: (state: StateType, action: PayloadAction<boolean>) => {
      state.ModalVisible = action.payload
    },
    setCurrentPage: (state: StateType, action: PayloadAction<number>) => {
      state.Currentpage = action.payload
    }
  },
})

export const { 
  setProducts, 
  setSearch, 
  setSelectedProduct, 
  setModalVisible, 
  setCurrentPage 
} = productsSlice.actions
export default productsSlice.reducer