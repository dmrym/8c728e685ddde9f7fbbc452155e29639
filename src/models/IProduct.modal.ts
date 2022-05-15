export interface IProductModel {
  admin_graphql_api_id: string
  body_html: string
  created_at: string
  handle: string
  id: number
  image: ProductImageType
  images: ProductImageType[]
  options: ProductOptionsType[]
  product_type: string
  published_at: string
  published_scope: string
  status: string
  tags: string
  template_suffix: string | null
  title: string
  updated_at: string
  variants: ProductVariantsType[]
  vendor: string
}

export type ProductImageType = {
  admin_graphql_api_id: string
  alt: string | null
  created_at: string
  height: number
  id: number
  position: number
  product_id: number
  src: string
  updated_at: string
  variant_ids: number[]
  width: number
}

export type ProductOptionsType = {
  id: number
  name: string
  position: number
  product_id: number
  values: string[]
  selectedValue?: string
}

export type ProductVariantsType = {
  admin_graphql_api_id: string
  barcode: string
  compare_at_price: string | null
  created_at: string
  fulfillment_service: string
  grams: number
  id: number
  image_id: number | null
  inventory_item_id: number
  inventory_management: string
  inventory_policy: string
  inventory_quantity: number
  old_inventory_quantity: number
  option1: string
  option2: string | null
  option3: string | null
  position: number
  price: string
  product_id: number
  requires_shipping: boolean
  sku: string
  taxable: boolean
  title: string
  updated_at: string
  weight: number
  weight_unit: string
}

