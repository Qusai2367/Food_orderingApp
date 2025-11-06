import {
    View,
    Text,
    Button
} from 'react-native';
import {
    router
} from "expo-router";
import React
    from "react";

// create a component
const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Button title = "Sign Up " onPress={() => {
                router.push("/singIn");
            }}/>
        </View>
    );
};

export default SignUp;
