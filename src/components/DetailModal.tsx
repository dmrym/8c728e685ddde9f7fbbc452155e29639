import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Actions, RootState } from '../store/Store';

export const DetailModal = () => {
  const ModalVisible = useSelector((state: RootState) => state.ProductsState.ModalVisible);
  const SelectedProduct = useSelector((state: RootState) => state.ProductsState.SelectedProduct);
  const dispatch = useDispatch();
  const HandleCloseModal = () => {
    dispatch(Actions.setModalVisible(false))
  }
  return (
    <Modal 
      title={SelectedProduct?.title} 
      onOk={HandleCloseModal} 
      okButtonProps={{size: "large", type: "primary"}}
      cancelButtonProps={{style: {display:'none'}}} 
      visible={ModalVisible} 
      onCancel={HandleCloseModal}>
      {
        SelectedProduct && 
        <>
          <div dangerouslySetInnerHTML={{__html: SelectedProduct?.body_html}}></div>
        </>
      }
    </Modal>
  )
}
