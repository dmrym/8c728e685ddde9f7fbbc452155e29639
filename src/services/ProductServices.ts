import { ApiUrls } from './../constants';
import { ProductApi } from './';
import { IProductModel } from '../models';
import { message } from 'antd';

export const ProductService = {
  Get: () => new Promise<IProductModel[] | any>((resolve, reject) => { 
      ProductApi.get(ApiUrls.Product)
        .then((res) => {
          if (res.data.products) {
            resolve(res.data.products);
          } else {
            message.error("Server error. Please check api and token", 3);
            reject("Error");
          }
        })
        .catch((err) => reject(err));
  })
}
