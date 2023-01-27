import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { shadowProps } from "../common/styles";
import { withNavigation } from "react-navigation";

const RestaurantItem = ({ restaurant, navigation }) => {
  const handleNavigation = (id) => {
    navigation.navigate("Restaurant", { id });
  };
  return (
    <TouchableOpacity onPress={() => handleNavigation(restaurant.id)}>
      <View style={[styles.container, styles.shadowProps]}>
        <Image source={{ uri: restaurant.image_url }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.infos}>
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.price}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(0,0,0)",
    height: 100,
    flexDirection: "row",
    borderRadius: 50,
    marginVertical: 15,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  shadowProps,
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
    alignItems: "center",
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  infos: {
    flexDirection: "row",
  },
  rating: { marginRight: 15, fontSize: 20, color: "white" },
  price: { color: "gold", fontSize: 20 },
});

export default withNavigation(RestaurantItem);
