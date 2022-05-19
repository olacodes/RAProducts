import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems={"center"}>
        <Text fontSize={40}>Here is Ransacturies Project!</Text>
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}
