import React
    from 'react';
import {
    Button,
    Text,
    View
} from "react-native";
import {
    router
} from "expo-router";

const SingIn = () => {
    return (
        <View>
            <Text>Sing In</Text>
            <Button title = "Sign In " onPress={() => {
                router.push("/singUp");
            }}/>
        </View>
    );
};

export default SingIn;