import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import "../../global.css"

const Sample = () => {
    const [data, setData] = useState("")
    return (
        <View style = {{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style = {{ fontSize: 20 }}>Hello, sample</Text>
        </View>
    )
}

export default Sample