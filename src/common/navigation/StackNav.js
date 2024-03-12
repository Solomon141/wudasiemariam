import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../reusables/colors";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Stack = createStackNavigator();

import DDNav from "./DDNav";
import Login from "../Login";
import Otp from "../Otp";
import MyPager from "../MyPager";

const StackNav = ({ navigation }) => {
  const dispatch = useDispatch();
  const { langName, sessionTimeOutValue, loadingFinished } = useSelector(
    (store) => store.allsettings
  );
  const customer = useSelector((store) => store.customer);
  const newlangName = langName === "en" ? "am" : "en";
  const [t, i18n] = useTranslation("global");

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: colors.ddTextColor,
        }}
      >
         <Stack.Screen
          name="MyPager"
          options={{ headerShown: false, headerTitle: t("login.login") }}
          component={MyPager}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false, headerTitle: t("login.login") }}
          component={Login}
        />
        <Stack.Screen
          name="Apphome"
          options={{ headerShown: false, headerTitle: t("login.login") }}
          component={DDNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
