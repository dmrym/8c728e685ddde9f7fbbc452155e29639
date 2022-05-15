import React, { useState } from 'react'
import { IProductModel, ProductVariantsType } from '../models'
import { Button, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { Actions } from '../store/Store';

export const ProductCard: React.FC<IProductModel> = (props) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariantsType>(props.variants[0]);
  const dispatch = useDispatch();
  return (
    <>
      <div className="product">
        <div className="product__image">
          <img src={selectedVariant.image_id ? props.images.filter((img) => img.id === selectedVariant.image_id)[0].src : props.image.src} alt="test" />
        </div>
        <div className="product__content">
          <div className="title">{props.title}</div>
          <div className="subtitle">{props.product_type} / <span>{selectedVariant.title}</span></div>
          <div className="variants">
            <div className="variants__key">Variants</div>
            <div className="variants__values">
              {props.variants.map((variant) =>
                <Tag key={variant.id} color={variant.id === selectedVariant.id ? "volcano" : "default"} onClick={() => setSelectedVariant(variant)}>
                  {variant.title}
                </Tag>
              )}
            </div>
          </div>
          <div className="product__footer">
            <div className="product__footer__price">{selectedVariant.price} $</div>
            <div className="product__footer__btn">
              <Button onClick={() => {
                dispatch(Actions.setSelectedProduct(props))
                dispatch(Actions.setModalVisible(true));
              }} type="primary" size="large">SEE DETAILS</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
