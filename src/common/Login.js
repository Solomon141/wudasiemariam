import { View } from "react-native";
import React, { useState } from "react";
import LogoContainer from "./reusables/containers/LogoContainer"

import { useTranslation } from "react-i18next";
import { colors } from "./reusables/colors";

import MainContainerLanguage from "./reusables/containers/MainContainerLanguage";
import StyledTextInputs from "./reusables/inputs/StyledTextInputs";
import RegularButton from "./reusables/buttons/RegularButton";
import DDLinkButton from "./reusables/controlls/DDLinkButton";

const Login = () => {
  const [t, i18n] = useTranslation("global");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState(0);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <MainContainerLanguage style={{ flex:1, justifyContent: "center" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <LogoContainer style={{ width: 150, height: 150 }} />
      </View>

      <StyledTextInputs
        label={t("auth.email")}
        placeholder="weymit2001@gmail.com"
        placeholderTextColor="red"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        icon="mail-outline"
        style={{ marginBottom: 25 }}
      />

      <StyledTextInputs
        label={t("auth.password")}
        placeholder=" * * * * * * *"
        placeholderTextColor={colors.ddGameColor}
        onChangeText={setPassword}
        value={password}
        icon="lock-closed"
        style={{ marginBottom: 25 }}
        secureTextEntry={hidePassword}
        hidePassword={hidePassword}
        setHidePassword={setHidePassword}
        isPassword={true}
      />

      <RegularButton onPress={() => {}}>{t("auth.login")}</RegularButton>

      
    </MainContainerLanguage>
  );
};

export default Login;
