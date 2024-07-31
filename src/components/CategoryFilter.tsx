import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, FormControlLabel, Switch } from '@mui/material';
import { FilterCategory, ProductCategory } from '../models/ProductCategory';

const categories: ProductCategory[] = [
  ProductCategory.Fruit,
  ProductCategory.Vegetables,
  ProductCategory.Meat,
];
interface CategoryFilterProps {
  selectedCategory: FilterCategory;
  searchText:string;
  inStockOnly:boolean;
  onCategoryChange: (event: SelectChangeEvent) => void;
  onTextChange: (text: string) => void;
  onStockChange: (inStock: boolean) => void;
}
const CategoryFilter = ({selectedCategory,searchText,inStockOnly,onCategoryChange,onTextChange,onStockChange}:CategoryFilterProps) => {
  return (
  <>
    <FormControl fullWidth sx={{my:1,minWidth: 120 }}>
      <InputLabel id="categorySelectLabel">Select a category</InputLabel>
      <Select
        labelId="categorySelectLabel"
        id="categorySelect"
        label="Select a category"
        sx={{ width: '100%'}}
        value={selectedCategory}
        onChange={onCategoryChange}
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
    <TextField
        fullWidth
        label="Search"
        variant="outlined"
        value={searchText}
        onChange={(e) => onTextChange(e.target.value)}
        sx={{ mb: 2 }}
      />
    <FormControlLabel
        control={<Switch checked={inStockOnly} onChange={(e) => onStockChange(e.target.checked)} />}
        label="In Stock Only"
      />
  </>
  );
};

export default CategoryFilter;
