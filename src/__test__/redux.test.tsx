import reducer, { setProducts } from './../store/AppSlice'
import { MockProduct } from './__testmock/MockProduct'

let initialState: any = {
  Products: null,
  FilteredProducts: null,
  SearchKey: "",
  SelectedProduct: null,
  ModalVisible: false,
  PageSize: 10,
  Currentpage: 1
}
test('should return the initial state', () => {
  expect(reducer(undefined, {
    type: undefined
  })).toEqual(initialState)
})

test('should products and filtered products update', () => {
  var newState = JSON.parse(JSON.stringify(initialState))
  newState.Products = MockProduct;
  newState.FilteredProducts = MockProduct;
  expect(reducer(initialState, setProducts(MockProduct))).toEqual(newState)
})