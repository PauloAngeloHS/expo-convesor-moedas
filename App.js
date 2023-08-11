import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [originCurrency, setOriginCurrency] = useState("BRL");
  const [bananaCurrency, setBananaCurrency] = useState("USD");
  const [value, setValue] = useState("33.33");
  const [result, setResult] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View>
        <Text style={styles.label}>Moeda 1</Text>
        <Picker selectedValue={originCurrency} onValueChange={(itemValue, itemIndex) => setOriginCurrency(itemValue)}>
          <Picker.Item label="Brazilian Real" value="BRL" />
          <Picker.Item label="American Dolar" value="USD" />
        </Picker>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
  },
  picker: {
    color: "#fff",
  },
  label: {
    color: "#fff",
  },
  input: {
    color: "#fff",
  },
});
