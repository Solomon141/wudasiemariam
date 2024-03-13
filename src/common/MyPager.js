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
import { colors } from "./reusables/colors";
import Login from "./Login";
import DDLinkButton from "../common/reusables/controlls/DDLinkButton";

import BigText from "../common/reusables/texts/BigText";
import RegularText from "../common/reusables/texts/RegularText";
import SmallText from "../common/reusables/texts/SmallText";

import stmary from "../../assets/images/stmary.jpeg";
import stmichael from "../../assets/images/stmichael.jpeg";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const MyPager = ({ navigation }) => {
  return (
    <SafeAreaView testID="safe-area-view" style={styles.flex}>
      <AnimatedPagerView
        testID="pager-view"
        initialPage={0}
        style={styles.PagerView}
      >
        <View testID={`pager-view-data-1`} key="1" style={styles.center}>
          <View
            style={{
              position: "absolute",
              top: 40,
              right: 25,
              flexDirection: "row",
            }}
          ></View>
          <Image source={stmary} style={styles.nowhiteStyle} />
          <BigText>ዉዳሴ ማርያም ✨</BigText>
          <Text>
            ውዳሴ ማርያም የሶርያው ቅዱስ ኤፍሬም የደረሰውና በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስቲያን ከጥንት ጀምሮ
            በጣም የታወቀና የተወደደ ጸሎት (የጸሎት መጽሐፍ) ነው ይኸውም እመቤታችን ድንግል ማርያምን በብዙ ምሳሌ
            እየመሰለ የሚያወድስ፤ ሥነ-ጽሑፋዊ ውበት ያለው በመሆኑ ደግሞ ከጸሎትነቱም ባሻገር ጥልቅ ምስጢር ያለበት
            ትምህርት የሚሰጥ ነው።
          </Text>
          <RegularText>ጸሎት ዘዘወትር ፣ ውዳሴ ማርያም ፣ ምስለ ኣንቀጸ ብርሃን ፣ </RegularText>
          <RegularText>ይወድስዋ መላእክት ፣ መልክኣ ማርያም ፣ ወመልክኣ ኢየሱስ </RegularText>
          <RegularText> እና መልክኣ ኤዶም ያካተተ፡፡ </RegularText>
          <DDLinkButton
            label={<BigText>ጀምር</BigText>}
            style={{ color: colors.ddThemeColor }}
            onPress={() => {
              navigation.navigate(Login);
            }}
          />
        </View>
        <View testID={`pager-view-data-1`} key="2" style={styles.center}>
          <View
            style={{
              position: "absolute",
              top: 40,
              right: 25,
              flexDirection: "row",
            }}
          ></View>
          <Image source={stmichael} style={styles.nowhiteStyle} />
          <BigText>ድርሳነ ሚካኤል </BigText>
          <Text> </Text>
          <DDLinkButton
            label="ጅምር"
            style={{ color: colors.ddThemeColor }}
            onPress={() => {
              navigation.navigate(Login);
            }}
          />
        </View>
      </AnimatedPagerView>
    </SafeAreaView>
  );
};

export default MyPager;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  PagerView: {
    flex: 1,
  },
  nowhiteStyle: {
    margin: 15,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
  },
});
