import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Product } from '../models/Product';
import { ProductCategory } from '../models/ProductCategory';
import { ProductStatus } from '../models/ProductStatus';

const mock = new MockAdapter(axios, { delayResponse: 500 });

const mockProducts: Product[] = [
  { id: 1, name: 'Apple', status: ProductStatus.Active, category: ProductCategory.Fruit, price: 1.99, stock: 100 },
  { id: 2, name: 'Banana', status: ProductStatus.Active, category: ProductCategory.Fruit, price: 0.99, stock: 0 },
  { id: 3, name: 'Carrot', status: ProductStatus.Inactive, category: ProductCategory.Vegetables, price: 1.49, stock: 50 },
];

mock.onGet('/api/products').reply(config => {
  const { category, search, inStock } = config.params;
  
  let filteredProducts = mockProducts;

  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  if (search) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (inStock === true) {
    filteredProducts = filteredProducts.filter(product => product.stock > 0);
  }

  return [200, filteredProducts];
});

export default mock;
