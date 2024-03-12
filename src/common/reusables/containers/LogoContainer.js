import { StyleSheet, Image, View } from "react-native";
import React from "react";

import logo from "../../../../assets/icon.png";

const LogoContainer = ({ label, style, ...rest }) => {
  return (
    <View style={style}>
      <Image source={logo} style={styles.nowhiteStyle} />
    </View>
  );
};

export default LogoContainer;

const styles = StyleSheet.create({
  nowhiteStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});
