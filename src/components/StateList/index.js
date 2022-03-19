import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import StateListItem from "../StateListItem";

const StateList = ({ onPressItem }) => {
  const loading = useSelector((state) => state.appData.loading);
  const states = useSelector((state) => state.appData.states);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => (
    <StateListItem item={item} onPress={onPressItem} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={states}
        renderItem={renderItem}
        keyExtractor={(item) => item.state}
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

export default StateList;
