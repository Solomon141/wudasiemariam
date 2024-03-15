import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Wudasiemariam from "../../wudasiemariam/Wudasiemariam";
import TselotZezewetir from "../../wudasiemariam/TselotZezewetir";

const WDDNav = () => {
  const CDDNav = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.2 }}>
          <BrandDrawerContainer />
        </View>
        <View style={{ flex: 0.7 }}>
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        </View>
      </View>
    );
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Wudasiemariam" component={Wudasiemariam} />
      <Drawer.Screen name="TselotZezewetir" component={TselotZezewetir} />
    </Drawer.Navigator>
  );
};

export default WDDNav;

const styles = StyleSheet.create({});
