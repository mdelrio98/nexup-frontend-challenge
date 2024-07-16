import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Grid, Container, CircularProgress, Alert,SelectChangeEvent } from "@mui/material";
import { Product } from "../models/Product";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import { FilterCategory, ProductCategory } from "../models/ProductCategory";

const fetchProducts = (): Promise<AxiosResponse<Product[]>> => {
  return axios.get<Product[]>("/api/products");
};
const ProductManager = () => {
  const [selectedCategory,setSelectedCategory] = useState<FilterCategory>('All');  
  const [searchText, setSearchText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const { data:productList, isLoading, isError } = useQuery<AxiosResponse<Product[]>>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as ProductCategory);
  };
  const handleTextChange = (text: string) => {
    setSearchText(text);
  };

  const handleStockChange = (inStock: boolean) => {
    setInStockOnly(inStock);
  };
  if (isLoading) return <CircularProgress />;
  if (isError) return <Alert severity="error">Error fetching products</Alert>;

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3} minWidth='300px' >
        <Grid item xs={12} width='100%'>
          <CategoryFilter onCategoryChange={handleCategoryChange}  onTextChange={handleTextChange} onStockChange={handleStockChange}/>
        </Grid>
        <Grid item xs={12} width='100%'>
          <ProductList productList={productList?.data || []} category={selectedCategory} searchText={searchText} inStockOnly={inStockOnly} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductManager;
