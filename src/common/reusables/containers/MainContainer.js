import { StyleSheet, Text, View } from "react-native";
import React from "react";

import styled from "styled-components/native";
import { colors } from "../colors";

export const StyledView = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding-left: 10px;
  padding-right: 10px;
`;

export const StyledViewOld = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  background-color: ${colors.white};
`;

const MainContainer = (props) => {
  return <StyledView  {...props}>{props.children}</StyledView>;
};

export default MainContainer;
