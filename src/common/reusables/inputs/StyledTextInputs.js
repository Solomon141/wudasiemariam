import { View, Text } from "react-native";
import React from "react";

import styled from "styled-components/native";
import { colors } from "../colors";
import SmallText from "../texts/SmallText";

import { Ionicons } from "@expo/vector-icons";

export const InputField = styled.TextInput`
  background-color: ${colors.white};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 10px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: ${colors.black};
  color: ${colors.black};
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

const StyledTextInputs = ({
  label,
  icon,
  hidePassword,
  setHidePassword,
  isPassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Ionicons name={icon} size={30} color={colors.ddGameColor} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField secureTextEntry={hidePassword} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? "eye-off" : "eye"} size={30} color={colors.ddGameColor} />
        </RightIcon>
      )}
    </View>
  );
};

export default StyledTextInputs;
