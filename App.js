import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default function App() {
  const [originCurrency, setOriginCurrency] = useState("BRL");
  const [bananaCurrency, setBananaCurrency] = useState("USD");
  const [valueInput, setValueInput] = useState("33.33");
  const [result, setResult] = useState("");
  const handleConvert = async () => {
    let URL = `https://economia.awesomeapi.com.br/last/${originCurrency}-${bananaCurrency}`;
    try {
      let page = await fetch(URL);
      let json = await page.json();
      let indice = parseFloat(json[`${originCurrency}${bananaCurrency}`].high);
      let value = parseFloat(valueInput);
      setResult((value * indice).toFixed(2));
    } catch (error) {
      setResult(`Erro: ${error.message}`);
    }
  };
  const handleClear = () => {
    setResult("");
    setValueInput("33.333333");
    setOriginCurrency("BRL");
    setBananaCurrency("USD");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <View>
        <Text style={styles.label}>Moeda de origen:</Text>
        <Picker
          itemStyle={styles.picker}
          style={styles.picker}
          selectedValue={originCurrency}
          onValueChange={(itemValue, itemIndex) => setOriginCurrency(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dólar Americano" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
          <Picker.Item label="Iene Japonês" value="JPY" />
        </Picker>
      </View>
      <View>
        <Text style={styles.label}>Moeda de destino:</Text>
        <Picker
          itemStyle={styles.picker}
          style={styles.picker}
          selectedValue={bananaCurrency}
          onValueChange={(itemValue, itemIndex) => setBananaCurrency(itemValue)}
        >
          <Picker.Item label="Real Brasileiro" value="BRL" />
          <Picker.Item label="Dólar Americano" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
          <Picker.Item label="Iene Japonês" value="JPY" />
        </Picker>
      </View>
      <View>
        <Text style={styles.label}>Valor para conversão</Text>
        <TextInput
          style={styles.input}
          value={valueInput}
          onChangeText={setValueInput}
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View>
        <Pressable style={styles.button} onPress={handleConvert}>
          <Text style={styles.buttonLabel}>Conveter</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonLabel}>Limpar</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.input}>{result}</Text>
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
    fontSize: 20,
    color: "#fff",
  },

  picker: {
    color: "#fff",
    dropdownIconColor: "#fff",
    selectionColor: "#fff",
    width: 200,
    height: 40,
  },
  pickerLabel: {
    fontSize: 18,
    color: "#fff",
  },
  pickerText: {
    fontSize: 18,
    color: "#fff",
  },
  label: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#0f0",
    width: 200,
    alignItems: "center",
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    height: 40,
  },
  buttonLabel: {
    fontSize: 18,
    color: "#fff",
  },
  input: {
    textAlign: "right",
    color: "#fff",
    width: 200,
    height: 40,
  },
});
