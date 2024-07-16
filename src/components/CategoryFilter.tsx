import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { ProductCategory } from '../models/ProductCategory';

const CategoryFilter = () => {
  const categories: ProductCategory[] = [
    ProductCategory.Fruit,
    ProductCategory.Vegetables,
    ProductCategory.Meat,
  ];

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const selectedCategory = event.target.value as ProductCategory;
  };

  return (
    <FormControl fullWidth sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="categorySelectLabel">Select a category</InputLabel>
      <Select
        labelId="categorySelectLabel"
        id="categorySelect"
        label="Select a category"
        onChange={handleCategoryChange}
        defaultValue="All"
        fullWidth
      >
        <MenuItem value="All">All</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
