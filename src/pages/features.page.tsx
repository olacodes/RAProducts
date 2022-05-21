import { decrement, increment } from "../redux/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Box, Button, Center, Text } from "native-base";
import ProductList from "../components/Product/productList";


const FeaturesPage = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <Center>
      <Text>Hello Features Page</Text>

      <ProductList /> 
    </Center>
  );
};
export default FeaturesPage;
