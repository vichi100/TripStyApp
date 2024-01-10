import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";

const PercentageBar = ({ percentage }) => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 500,
    }).start();
  }, [percentage]);

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
     
      <View style={styles.progressMiddle}>
        <View style={styles.progressWrap}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
      </View>
      <Text style={styles.progressPercentText}>{percentage}%</Text>
    </View>
  );
};


export default PercentageBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#323357",
    textAlign: "center",
  },
  
  
  
  spacer: {
    marginBottom: 14,
  },
  
  progressPercentText: { width: 40, fontSize: 10, color: "#323357" },
  progressMiddle: {
    height: 5,
    flex: 1,
    marginHorizontal: 10,
  },
  progressWrap: {
    backgroundColor: "#D1D1D4",
    borderRadius: 18,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 2,
  },
  progressBar: {
    flex: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#12A0F1",
    shadowOpacity: 1.0,
    shadowRadius: 2,
    backgroundColor: "#12A0F1",
    borderRadius: 18,
    minWidth: 0,
  },
});