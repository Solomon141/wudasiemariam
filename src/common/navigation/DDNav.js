import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { colors } from "../reusables/colors";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
import AboutUs from "../AboutUs";
import AppHome from "../../Charity/AppHome";
import MyAccount from "../../Charity/MyAccount";

import BrandDrawerContainer from "../reusables/containers/BrandDrawerContainer";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { changeLang } from "../redux/settingSlice";
// import axios from "axios";
import Termsandconditions from "../Termsandconditions";
import Privacypolicy from "../Privacypolicy";
import { Ionicons, MaterialIcons, Foundation } from "@expo/vector-icons";

import Toast from "react-native-simple-toast";
import NetInfo from "@react-native-community/netinfo";
import { useRoute } from "@react-navigation/native";

import { custLogout } from "../redux/customerAuthSlice";

const DDNav = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const { langName, serverIP } = useSelector((store) => store.allsettings);
  const newlangName = langName === "en" ? "am" : "en";
  const [t, i18n] = useTranslation("global");
  const customer = useSelector((store) => store.customer);

  const refreshButton = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        Toast.show(t("refresh.syncSuccess"), Toast.LONG, {
          backgroundColor: "blue",
        });
      } else {
        Toast.show(t("refresh.noInternet"), Toast.LONG, {
          backgroundColor: "blue",
        });
      }
    });
  };

  const dispatchChange = () => {
    i18n.changeLanguage(langName === "am" ? "es" : "en");
    dispatch(
      changeLang({
        langName: newlangName,
      })
    );
  };

  const logout = () => {
    dispatch(custLogout());
  };

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
        <View
          style={{
            flex: 0.1,
            padding: 15,
            paddingTop: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text>{t("auth.logout")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CDDNav {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: colors.white,
          drawerActiveTintColor: colors.ddGameColor,
          drawerLabelStyle: { marginLeft: -10 },
          headerTitleAlign: "center",
          headerTintColor: colors.ddGameColor,
          headerRight: () =>
            route.name === "Home" ? (
              <>
                <View style={{ flexDirection: "row", columnGap: 5 }}>
                  <TouchableOpacity
                    style={{ paddingRight: 15 }}
                    onPress={dispatchChange}
                  >
                    <Text
                      style={{ color: colors.ddGameColor, fontWeight: "bold" }}
                    >
                      {t("auth.language")}
                    </Text>
                  </TouchableOpacity>
                  <MaterialIcons
                    name="refresh"
                    size={18}
                    fontWeight="bold"
                    onPress={refreshButton}
                    style={{
                      paddingRight: 15,
                      fontWeight: "bold",
                      color: colors.ddGameColor,
                    }}
                    color="#000"
                  />
                </View>
              </>
            ) : (
              <></>
            ),
        }}
      >
        <Drawer.Screen
          name={t("stack.home")}
          component={AppHome}
          options={{
            // headerShown: false,
            headerTitle: "",
            drawerIcon: ({ color }) => (
              <Ionicons
                name="ios-home-outline"
                size={24}
                color={colors.ddGameColor}
              />
            ),
          }}
        />

        <Drawer.Screen
          name={t("stack.myaccount")}
          component={MyAccount}
          options={{
            // headerShown: false,
            headerTitle: "",
            drawerIcon: ({ color }) => (
              <Ionicons
                name="ios-home-outline"
                size={24}
                color={colors.ddGameColor}
              />
            ),
          }}
        />

        <Drawer.Screen
          name={t("stack.aboutus")}
          component={AboutUs}
          options={{
            headerTitle: t("stack.aboutus"),
            drawerIcon: ({ color }) => (
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={colors.ddGameColor}
              />
            ),
          }}
        />

        <Drawer.Screen
          name={t("stack.privacypolicy")}
          component={Privacypolicy}
          options={{
            headerTitle: t("stack.privacypolicy"),
            drawerIcon: ({ color }) => (
              <MaterialIcons
                name="privacy-tip"
                size={24}
                color={colors.ddGameColor}
              />
            ),
          }}
        />

        <Drawer.Screen
          name={t("stack.termsconditions")}
          component={Termsandconditions}
          options={{
            headerTitle: t("stack.termsconditions"),
            drawerIcon: ({ color }) => (
              <Foundation
                name="clipboard-notes"
                size={24}
                color={colors.ddGameColor}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DDNav;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 15,
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: "center",
    marginTop: 10,
    width: "50%",
  },
});
