import React, { useState, Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";
import { inject, observer } from "mobx-react";

// @inject("BmiCalcStore")
// @observer

type Props = {
  bmiCalcStore: any;
};
class BmiCalc extends Component<Props, {}> {
  private height = 0;
  private weight = 0;
  private bmiCalcStore = this.props.bmiCalcStore;

  constructor(props: any) {
    super(props);
  }

  render() {
    // console.log("Props:", this.props.bmiCalcStore);
    // console.log(this.props);
    // console.log(this.props.bmiCalcStore);
    // console.log(this.props.bmiCalcStore.bmi);

    return (
      <View style={styles.container}>
        <View style={{ height: 150, marginTop: 50 }}>
          <Text style={styles.top}>BMI 計算機</Text>
        </View>
        <TextInput
          placeholder="身長 (cm)"
          placeholderTextColor="gray"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={value => (this.height = parseInt(value, 10))}
        />
        <TextInput
          placeholder="体重 (kg)"
          placeholderTextColor="gray"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={value => (this.weight = parseInt(value, 10))}
        />
        {/* <TouchableOpacity style={styles.button} onPress={calculate}>
          <Text style={styles.buttonText}>計算する</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.bmiCalcStore.setBmi(this.height, this.weight)}
        >
          <Text style={styles.buttonText}>計算する</Text>
        </TouchableOpacity>
        <Text style={styles.result}>BMIの値 : {this.bmiCalcStore.bmi}</Text>
        <Text style={styles.result}>判定 :{this.bmiCalcStore.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7D65FD",
    alignItems: "center"
    // justifyContent: "center"
  },
  top: {
    color: "white",
    fontSize: 50
  },
  input: {
    height: 30,
    textAlign: "center",
    width: "50%",
    fontSize: 20,
    // marginTop: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1
  },
  button: {
    backgroundColor: "black",
    height: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    width: "50%",
    marginTop: 20
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    alignSelf: "center"
  },
  result: {
    marginTop: 15,
    color: "#FFCB1F",
    fontSize: 20
    // padding: 5
  }
});

// export default BmiCalc;
export default inject("bmiCalcStore")(observer(BmiCalc));
