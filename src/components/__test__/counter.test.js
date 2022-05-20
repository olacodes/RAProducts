import React from "react";
import Counter from "../counter";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { NativeBaseProvider } from "native-base";

describe("Test Counter Component", () => {
  const initialState = { counter: { value: 10 } };
  const mockStore = configureStore();
  let store, wrapper;

  it(`renders correctly`, () => {
    store = mockStore(initialState);

    const tree = TestRenderer.create(
      <Provider store={store}>
        <NativeBaseProvider>
          <Counter />
        </NativeBaseProvider>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
