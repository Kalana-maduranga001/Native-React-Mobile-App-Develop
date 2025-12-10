import { View , Text } from "react-native"
import "../../global.css"
import { useLocalSearchParams } from "expo-router"

const ID = () => {
    const params = useLocalSearchParams()
    return(
        <View className="flex-1 justify-center items-center" >
            <Text className="text-20" >[ID]</Text>
        </View>
    )
}

export default ID