import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [result, setResult] = useState("");

  const calculate = () => {
    let bmi = weight / (height / 100) ** 2;
    if (bmi < 18.5) {
      setResult("低体重(痩せ型)");
    } else if (bmi >= 18.5 && bmi < 25) {
      setResult("普通体重");
    } else if (bmi >= 25 && bmi < 30) {
      setResult("肥満（１度）");
    } else if (bmi >= 30 && bmi < 35) {
      setResult("肥満（２度）");
    } else if (bmi >= 35 && bmi < 40) {
      setResult("肥満（３度）");
    } else {
      setResult("肥満（4度）");
    }
  };

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
        onChangeText={value => setHeight(value)}
      />
      <TextInput
        placeholder="体重 (kg)"
        placeholderTextColor="gray"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={value => setWeight(value)}
      />
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>計算する</Text>
      </TouchableOpacity>
      <Text style={styles.result}>BMIの値 : {bmi}</Text>
      <Text style={styles.result}>判定 :{result}</Text>
    </View>
  );
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
