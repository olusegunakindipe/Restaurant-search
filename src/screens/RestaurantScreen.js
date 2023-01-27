import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function RestaurantScreen({ navigation }) {
  const id = navigation.getParam("id");
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round(dimensions.width * 9) / 10;

  console.log("dimension", dimensions);
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    const searchRestaurants = async (id) => {
      setResult({ data: null, loading: true, error: null });

      try {
        const response = await yelp.get(`/${id}`);
        setResult({
          data: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setResult({
          data: null,
          loading: false,
          error: "Something went wrong",
        });
      }
    };
    searchRestaurants(id);
  }, [id]);

  if (result.loading)
    return <ActivityIndicator size="large" marginVertical={100} />;
  if (result.error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{result.error}</Text>
      </View>
    );
  console.log("check1", result.data?.photos);
  return (
    <View style={styles.container}>
      {result.data && (
        <FlatList
          data={result?.data?.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ height: imageHeight, width: imageWidth }}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
