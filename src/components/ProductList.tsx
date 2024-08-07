
import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { Product } from "../models/Product";
import { ProductStatus } from "../models/ProductStatus";

interface ProductListProps {
  productList: Product[];
}

const ProductList = ({ productList }:ProductListProps) => {
  return (
    <Grid container spacing={2} width={{sm:'100%',md:'500px'}} sx={{ minHeight: '400px', overflowY: 'auto' }}>
      {productList
        .map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Estado: <Box component="span" color={product.status === ProductStatus.Active ? "success.main" : "error.main"}>{product.status}</Box>
            </Typography>
            <Typography variant="h5" gutterBottom>{product.name}</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>Categoría: {product.category}</Typography>
            <Typography variant="body1">Precio: ${product.price.toFixed(2)}</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>Stock: {product.stock}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
