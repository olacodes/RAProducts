import { Box, Stack } from "native-base";
import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <Stack
      direction={"row"}
      space="3"
      flexWrap="wrap"
      mb="40"
    >
      
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Stack>
  );
};

export default ProductList;
