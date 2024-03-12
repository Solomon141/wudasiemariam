import { View, Text } from "react-native";
import React from "react";

import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../texts/RegularText"

export const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.secondary};
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 60px;
`;

const RegularButton = (props) => {
  return (
    <ButtonView onPress={props.onPress} {...props}>
      <RegularText style={{color:"white"}}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;
