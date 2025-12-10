import { View , Text } from "react-native"
import React from "react"
import { Slot } from "expo-router"


const RootLayout = () => {
    
    return(
        <View className="flex-1 w-full">
            <Slot />
            <View>
            <View className="bg-blue-500 w-full p-5"></View>
            <Text>This is footer</Text>
            </View>
        </View>
    )
}

export default RootLayout