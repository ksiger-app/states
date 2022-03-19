import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, SafeAreaView } from "react-native";
import { Store } from "./store";
import List from "./components/List";
import Details from "./components/Details";

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <List />
        <Details />
      </SafeAreaView>
    </Provider>
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

export default App;
