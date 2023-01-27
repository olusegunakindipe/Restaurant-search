import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.leading}>Grab your recipe</Text>
      <Text style={styles.subleading}>Delicious Meal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginHorizontal: 25,
  },
  leading: {
    // color: 'white',
    fontSize: 48,
    fontWeight: "bold",
  },
  subleading: {
    // color: "white",
    fontSize: 35,
  },
});
