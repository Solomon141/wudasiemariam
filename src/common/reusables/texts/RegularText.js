import { View, Text } from "react-native";
import React from "react";

import styled from "styled-components/native";
import { colors } from "../colors";

export const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.secondary};
  text-align: center;
`;

const RegularText = (props) => {
    return <StyledText {...props}>{props.children}</StyledText>;
}

export default RegularText