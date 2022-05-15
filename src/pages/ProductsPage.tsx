import { useDispatch, useSelector } from 'react-redux';
import { Actions, RootState } from '../store/Store';
import { ProductCard } from '../components/ProductCard';
import { FilterBar } from '../components/FilterBar';
import { DetailModal } from '../components/DetailModal';
import { PaginationFooter } from '../components/PaginationFooter';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductService } from '../services';

const ProductsPage = () => {
  const FilteredProducts = useSelector((state: RootState) => state.ProductsState.FilteredProducts);
  const CurrentPage = useSelector((state: RootState) => state.ProductsState.Currentpage);
  const PageSize = useSelector((state: RootState) => state.ProductsState.PageSize);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    ProductService.Get()
      .then((res) => dispatch(Actions.setProducts(res)))
      .catch(() => {
        navigate("/");
      });
  });
  return (
    <>
      <FilterBar name="search" size="large" onChange={(e: any) => dispatch(Actions.setSearch(e.target.value))} placeholder="Search products" />
      <div className="products">
        {!FilteredProducts ? <p>Loading...</p> : FilteredProducts.slice((CurrentPage - 1) * PageSize, PageSize * CurrentPage).map((product) => 
          <ProductCard key={product.id} {...product} />
        )}
      </div>
      <PaginationFooter />
      <DetailModal />
    </>
  )
}

export default ProductsPage;
