import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Actions, RootState } from '../store/Store';
export const PaginationFooter = () => {
  const dispatch = useDispatch();
  const FilteredProducts = useSelector((state: RootState) => state.ProductsState.FilteredProducts);
  const CurrentPage = useSelector((state: RootState) => state.ProductsState.Currentpage);
  const PageSize = useSelector((state: RootState) => state.ProductsState.PageSize);
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  return (
    <div className="pagination">
      <Pagination 
        simple={isMobile}
        onChange={(page) => dispatch(Actions.setCurrentPage(page))} 
        pageSize={PageSize} 
        current={CurrentPage} 
        total={FilteredProducts?.length} 
      />
      <div className="pagination__result">{FilteredProducts?.length} Results</div>
    </div>
  )
}
