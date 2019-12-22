import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "mobx-react";
import BmiCalc from "./src/BmiCalc";
import BmiCalcStore from "./src/stores/BmiCalcStore";

const bmiCalcStore = new BmiCalcStore();

class App extends React.Component {
  render() {
    return (
      <Provider bmiCalcStore={bmiCalcStore}>
        <BmiCalc />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
