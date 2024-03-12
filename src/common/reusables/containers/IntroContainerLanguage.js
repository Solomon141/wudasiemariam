import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

import styled from "styled-components/native";

import { colors } from "../colors";

import { changeLang } from "../../redux/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import DDLinkButton from "../controlls/DDLinkButton";

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

const IntroContainerLanguage = (props) => {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("global");
  const { langName, serverIP, loadingFinished } = useSelector(
    (store) => store.allsettings
  );
  const newlangName = langName === "en" ? "am" : "en";
  const dispatchChange = () => {
    i18n.changeLanguage(langName === "am" ? "es" : "en");
    dispatch(
      changeLang({
        langName: newlangName,
      })
    );
  };

  return (
    <StyledView {...props}>
      <View
        style={{
          position: "absolute",
          top: 40,
          right: 25,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={dispatchChange}>
          <Text style={{ color: colors.ddGameColor, fontWeight: "bold" }}>
            {t("auth.language")}
          </Text>
        </TouchableOpacity>
      </View>
      <View>{props.children}</View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          position: "absolute",
          bottom: 20,
        }}
      >
        <DDLinkButton
          label={t("auth.forgotpassword")}
          style={{ color: colors.ddThemeColor }}
        />
        <DDLinkButton
          label={t("auth.forgotpassword")}
          style={{ color: colors.ddThemeColor }}
        />
      </View>
    </StyledView>
  );
};

export default IntroContainerLanguage;
