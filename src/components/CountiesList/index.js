import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CountiesListItem from "../CountiesListItem";

const CountiesList = ({ find }) => {
  const loading = useSelector((state) => state.appData.loadingDetails);
  const counties = useSelector((state) => state.appData.counties);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading details...</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => <CountiesListItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={
          find
            ? counties.filter((item) => item.county.search(find) !== -1)
            : counties
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.county}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CountiesList;
