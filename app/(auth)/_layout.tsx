
import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function _layout() {
  return (
    <View>
        <Text>Auth layout</Text>
         <Slot/>
    </View>
  )
}
