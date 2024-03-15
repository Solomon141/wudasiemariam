import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Wudasiemariam from "../../wudasiemariam/Wudasiemariam";
import { colors } from "../reusables/colors";

const Stack = createStackNavigator();

import WDDNav from "./WDDNav";

const WStackNav = () => {
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
          name="Wudasiemariam"
          options={{ headerShown: false, headerTitle: "ውዳሴ ማርያም" }}
          component={WDDNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WStackNav;

const styles = StyleSheet.create({});
