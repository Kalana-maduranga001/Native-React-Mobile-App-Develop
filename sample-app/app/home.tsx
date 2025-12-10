import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import "../global.css"

const Home = () => {
    const [data, setData] = useState("")
    return (
        <View style = {{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style = {{ fontSize: 20 }}>Hello, Home</Text>
        </View>
    )
}

export default Home