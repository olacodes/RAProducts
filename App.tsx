import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";

import { Provider } from "react-redux";
import Counter from "./src/components/counter";
import store from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Box flex={1} justifyContent="center" alignItems={"center"}>
          <Text fontSize={40}>Here is Ransacturies Project!</Text>
          <Counter></Counter>
          <StatusBar style="auto" />
        </Box>
      </NativeBaseProvider>
    </Provider>
  );
}
