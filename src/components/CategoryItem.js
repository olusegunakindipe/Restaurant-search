import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { shadowProps } from "../common/styles";

export default function CategoryItem({
  name,
  imageUrl,
  index,
  active,
  handlePress,
}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.shadowProps,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active
            ? { backgroundColor: "rgb(0,0,0 )" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text style={[styles.header, active && { color: "white" }]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  shadowProps,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
  },
});
