import React from "react";

import WStackNav from "./src/common/navigation/WStackNav";
import store from "./src/common/redux/Store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import persistStore from "redux-persist/es/persistStore";
let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <WStackNav />
      </PersistGate>
    </Provider>
  );
}