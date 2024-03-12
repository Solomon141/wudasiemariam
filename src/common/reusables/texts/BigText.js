import { View, Text } from "react-native";
import React from "react";

import styled from "styled-components/native";
import { colors } from "../colors";

export const StyledText = styled.Text`
  font-size: 30px;
  color: ${colors.secondary};
  text-align: center;
`;

const BigText = (props) => {
    return <StyledText {...props}>{props.children}</StyledText>;
}

export default BigText