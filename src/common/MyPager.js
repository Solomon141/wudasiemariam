import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import PagerView, {
  PagerViewOnPageScrollEventData,
} from "react-native-pager-view";

import { ExpandingDot } from "react-native-animated-pagination-dots";

import { useTranslation } from "react-i18next";
import { changeLang } from "./redux/settingSlice";

import { colors } from "./reusables/colors";
import Login from "./Login";
import DDLinkButton from "../common/reusables/controlls/DDLinkButton";

import BigText from "../common/reusables/texts/BigText";
import RegularText from "../common/reusables/texts/RegularText";
import SmallText from "../common/reusables/texts/SmallText";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

import logo from "../../assets/icon.png";
import { useDispatch, useSelector } from "react-redux";

const INTRO_DATA = [
  {
    key: 0,
    image: logo,
    title: "Register ✨",
    titleAm: "ይመዝገቡ ✨",
    description: 
      "fill all the inputs in the registration form, Verify your phone number",
    descriptionAm: "በመመዝገቢያ ቅጽ ውስጥ ያሉትን ሁሉንም ግብዓቶች ይሙሉ ፣ የስልክ ቁጥርዎን ያረጋግጡ",
  },
  {
    key: 1,
    image: logo,
    title: "Deposit Money 🎉",
    titleAm: "ገንዘብ ያስገቡ 🎉",
    description:
      "Specify the amount of money you want to deposit. Be sure to adhere to any minimum or maximum deposit limits set by the platform ",
    descriptionAm:
      "ለማስቀመጥ የሚፈልጉትን የገንዘብ መጠን ይግለጹ. በመድረክ የተቀመጠውን ማንኛውንም ዝቅተኛ ወይም ከፍተኛ የተቀማጭ ገደቦችን ማክበርዎን ያረጋግጡ ",
  },
  {
    key: 2,
    image: logo,
    title: "Playing Game 🎈",
    titleAm: "ጨዋታ መጫወት 🎈 ",

    description:
      "Browse through the available games or events and choose the one you want to bet on. This could be a game match, a game table or casino. ",
    descriptionAm: "ያሉትን ጨዋታዎች ወይም ዝግጅቶች አስስ እና ለውርርድ የምትፈልገውን ምረጥ። ይህ የጨዋታ ግጥሚያ፣ የጨዋታ ጠረጴዛ ወይም ቁማር ሊሆን ይችላል።",
  },
  {
    key: 3,
    image: logo,
    title: "Withdraw money 🎈",
    titleAm: "ገንዘብ ማውጣት 🎈",

    description:
      "Depending on the chosen withdrawal method, you may need to provide relevant details. For a bank transfer, this could include your bank account information. For e-wallets, you might need to enter your wallet details.",
    descriptionAm: "በተመረጠው የማስወገጃ ዘዴ ላይ በመመስረት, ተዛማጅ ዝርዝሮችን መስጠት ሊኖርብዎ ይችላል. ለባንክ ማስተላለፍ፣ ይህ የባንክ ሂሳብ መረጃዎን ሊያካትት ይችላል። ለ e-wallets፣ የኪስ ቦርሳ ዝርዝሮችዎን ማስገባት ሊኖርብዎ ይችላል።",
  },
];

export default function MyPager({ navigation }) {
  const dispatch = useDispatch();

  const { langName } = useSelector((store) => store.allsettings);
  const [t, i18n] = useTranslation("global");
  const newlangName = langName === "en" ? "am" : "en";

  const width = Dimensions.get("window").width;
  const ref = React.useRef(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, INTRO_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
    []
  );

  const dispatchChange = () => {
    console.log("first");
    i18n.changeLanguage(langName === "am" ? "es" : "en");
    dispatch(
      changeLang({
        langName: newlangName,
      })
    );
  };

  return (
    <SafeAreaView testID="safe-area-view" style={styles.flex}>
      <AnimatedPagerView
        testID="pager-view"
        initialPage={0}
        ref={ref}
        style={styles.PagerView}
        onPageScroll={onPageScroll}
      >
        {INTRO_DATA.map(({ key }) => (
          <View
            testID={`pager-view-data-${key}`}
            key={key}
            style={styles.center}
          >
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
            <Image source={INTRO_DATA[key].image} style={styles.nowhiteStyle} />
            <BigText>
              {langName == "en"
                ? INTRO_DATA[key].titleAm
                : INTRO_DATA[key].title}
            </BigText>
            <Text>
              {langName == "en"
                ? INTRO_DATA[key].descriptionAm
                : INTRO_DATA[key].description}
            </Text>
          </View>
        ))}
      </AnimatedPagerView>

      <View
        style={{ flex: 0.2, alignItems: "center", justifyContent: "center" }}
      >
        <ExpandingDot
          testID={"expanding-dot"}
          data={INTRO_DATA}
          expandingDotWidth={30}
          //@ts-ignore
          scrollX={scrollX}
          inActiveDotOpacity={0.6}
          dotStyle={{
            width: 10,
            height: 10,
            backgroundColor: "#347af0",
            borderRadius: 5,
            marginHorizontal: 5,
          }}
          containerStyle={{
            top: 30,
          }}
        />
        <DDLinkButton
          label={t("general.skip")}
          style={{ color: colors.ddThemeColor }}
          onPress={() => {
            navigation.navigate(Login);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  PagerView: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#63a4ff",
  },
  progressContainer: { flex: 0.1, backgroundColor: "#63a4ff" },
  center: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 30,
  },
  separator: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  touchableTitle: {
    textAlign: "center",
    color: "#000",
  },
  touchableTitleActive: {
    color: "#fff",
  },
  dotsContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  dotContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  contentSlider: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dots: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 310,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  nowhiteStyle: {
    margin: 15,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
