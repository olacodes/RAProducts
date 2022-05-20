import { decrement, increment } from "../redux/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Box, Button, Center, Text } from "native-base";

const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <Center>
      <Text fontSize={40}>{counter.value}</Text>
      <Box display={"flex"} flexDirection="row">
        <Button margin={4} onPress={handleIncrement}>
          Increment
        </Button>
        <Button margin={4} onPress={() => dispatch(decrement())}>Decrement</Button>
      </Box>
    </Center>
  );
};
export default Counter;
