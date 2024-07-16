import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

const mock = new MockAdapter(axios, { delayResponse: 500 });

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Apple',
    status: ProductStatus.Active,
    category: ProductCategory.Fruit,
    price: 1.99,
  },
  {
    id: 2,
    name: 'Carrot',
    status: ProductStatus.Inactive,
    category: ProductCategory.Vegetables,
    price: 0.99,
  },
  {
    id: 3,
    name: 'Chicken',
    status: ProductStatus.Active,
    category: ProductCategory.Meat,
    price: 5.49,
  },
];

mock.onGet('/api/products').reply(200, mockProducts);

export default mock;
