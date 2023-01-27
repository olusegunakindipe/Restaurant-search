import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import RestaurantItem from "./RestaurantItem";

export const Restaurants = ({ term }) => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });
  useEffect(() => {
    const searchRestaurants = async (term) => {
      setResult({ data: null, loading: true, error: null });

      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 15,
            term: `${term}`,
            location: "Toronto",
          },
        });
        setResult({
          data: response.data.businesses,
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
    searchRestaurants(term);
  }, [term]);
  {
  }
  if (result.loading)
    return <ActivityIndicator size="large" marginVertical={100} />;
  if (result.error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{result.error}</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={result.data}
        keyExtractor={(res) => res.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    paddingBottom: 10,
    fontSize: 20,
  },
});

export default Restaurants;
