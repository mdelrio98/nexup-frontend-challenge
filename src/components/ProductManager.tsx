import React from "react";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product";
import { Grid, Container, CircularProgress, Alert } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (): Promise<AxiosResponse<Product[]>> => {
  return await axios.get<Product[]>("/api/products");
};
const ProductManager = () => {
  const { data:productList, isLoading, isError } = useQuery<AxiosResponse<Product[]>>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <CircularProgress />;
  if (isError) return <Alert severity="error">Error fetching products</Alert>;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CategoryFilter />
        </Grid>
        <Grid item xs={12}>
          <ProductList productList={productList?.data || []} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductManager;
