import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DDLinkButton from "../common/reusables/controlls/DDLinkButton";
import TselotZezewetir from "./TselotZezewetir";
import { colors } from "../common/reusables/colors";

const Wudasiemariam = ({ navigation }) => {
  return (
    <View>
      <DDLinkButton
        label="ጅምር"
        style={{ color: colors.ddThemeColor }}
        onPress={() => {
          navigation.navigate(TselotZezewetir);
        }}
      />
    </View>
  );
};

export default Wudasiemariam;

const styles = StyleSheet.create({});
