import { ProductStatus } from './ProductStatus';
import { ProductCategory } from './ProductCategory';

export interface Product {
  id: number;
  name: string;
  status: ProductStatus;
  category: ProductCategory;
  price: number;
}
