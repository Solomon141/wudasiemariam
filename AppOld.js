import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNav from "./src/common/navigation/StackNav";
import store from "./src/common/redux/Store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import persistStore from "redux-persist/es/persistStore";
let persistor = persistStore(store);

import global_en from "./src/common/translations/en/global.json";
import global_es from "./src/common/translations/es/global.json";
import global_am from "./src/common/translations/am/global.json";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  compatibilityJSON: "v3",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNav />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
