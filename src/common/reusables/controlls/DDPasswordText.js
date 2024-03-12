import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Text,
  } from "react-native";
  import React, { useState } from "react";
  import FnIcon from "react-native-vector-icons/FontAwesome5";
  
  const DDPasswordText = ({ ...rest }) => {
    const [isShown, setIsShown] = useState(false);
  
    const handlePressIn = () => {
      setIsShown(true);
    };
  
    const handlePressOut = () => {
      setIsShown(false);
    };
  
    return (
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          paddingTop: 10,
        }}
      >
        <TextInput
          secureTextEntry={!isShown}
          style={styles.defaultStyle}
          {...rest}
        />
        {/* <TextInput  maxLength={4}  keyboardType='numeric' secureTextEntry={!isShown} style={styles.defaultStyle} {...rest} /> */}
        <TouchableOpacity
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.eye}
        >
          <Text>
            <FnIcon name="eye" size={15} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default DDPasswordText;
  
  const styles = StyleSheet.create({
    defaultStyle: {
      width: "90%",
      backgroundColor: "#fff",
      textAlign: "center",
      height: 45,
    },
    eye: {
      width: "10%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      height: 45,
    },
  });
  