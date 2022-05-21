import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box, Text } from "native-base";

import { Provider } from "react-redux";
import Counter from "./src/components/counter";
import { BottomNavigation } from "./src/navigations/bottom.navigation";
import store from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
          <BottomNavigation />
          <StatusBar style="auto" />
      </NativeBaseProvider>
    </Provider>
  );
}
