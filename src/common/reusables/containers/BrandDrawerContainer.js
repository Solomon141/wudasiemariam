import { Text, View, StyleSheet } from "react-native";
import React from "react";
import LogoContainer from "./LogoContainer";
import { colors } from "../colors";

const BrandDrawerContainer = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={{ alignItems: "center" }}>
        <LogoContainer style={{ width: 80, height: 80 }} />
      </View>
      <View>
        <Text>+2519-358-115-76</Text>
        <Text>25,650 Birr</Text>
        <Text>Text</Text>
      </View>
    </View>
  );
};

export default BrandDrawerContainer;

const styles = StyleSheet.create({
  MainContainer: {
    height:"100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 25,
    borderBottomWidth: 2,
    borderBottomColor: colors.ddGameColor,
  },
});
