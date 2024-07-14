import React from 'react';
import { ProductList } from './ProductList';
import { CategoryFilter } from './CategoryFilter';

export const ProductManager: React.FC = () => {
  return (
    <div>
      <CategoryFilter />
      <ProductList productList={[]} />
    </div>
  );
};
