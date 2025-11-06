
import { Slot } from "expo-router";
import {
    Animated,
    Dimensions,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Text,
    View
} from "react-native";
import ScrollView = Animated.ScrollView;
import {
    images
} from "@/constants";
import CustomInput
    from "@/components/CustomInput";
import CustomButton
    from "@/components/CustomButton";

export default function _layout() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
            <View className="w-full relative" style={{height: Dimensions.get("screen").height / 2.25}}>
                <ImageBackground source={images.loginGraphic} className="size-full rounded-blg" resizeMode="stretch"/>
                <Image source={images.logo} className="self-center size-48 absolute -bottom-16 z-10" resizeMode="stretch"/>

            </View>
            <Slot/>
        </ScrollView>

    </KeyboardAvoidingView>
  )
}
