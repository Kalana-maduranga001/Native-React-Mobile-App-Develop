import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import "../global.css"

const asciiLines = [
  "⣿⣧⡈⠙⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⢹⠿⣿⣿⣿⣿",
  "⣿⣿⣿⣷⣶⡀⠿⠿⣿⣿⣿⣿⣿⣿⡇⠐⠂⢒⡢ ⣿⣿",
  "⣿⣿⣿⣿⣿⣿⣆ ⠈⢻⣿⣿⣿⣿⣿⡆⢈⣿⣿⣿⣿⣿",
  "⣿⣿⣿⣿⣿⣿⣿⣷⣄ ⠙⠻⢻⢿⣿⠷⢠⢽⣿⣿⣿⣿",
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠁ ⢘⣱⣍⠿⣾⢿⣿⢿⣿",
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄  ⢉⢷⣌⠳⣿⣽⣛",
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀  ⠋⠽⠶⡌⣿⣻",
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣠⡀   ⠐⠇⢿⣿",
  "⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠏⠁ ⠈ ⠅⠶⠲⠶⠆⠔",
];

const Index = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < asciiLines.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.ascii}>
        {asciiLines.slice(0, visibleLines).join("\n")}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type here..."
        placeholderTextColor="#888"
      />

      <TouchableOpacity>
        <Text style={styles.btn}>click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "black",         
  },
  ascii: {
    fontFamily: "monospace",
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 20,
    color: "#00ff00",                  
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#00ff00",          
    color: "#00ff00",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  btn: {
    padding: 10,
    backgroundColor: "#00ff00",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
});
