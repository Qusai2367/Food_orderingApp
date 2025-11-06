import React
    , {
    useState
} from 'react';
import {
    Alert,
    Button,
    Text,
    View
} from "react-native";
import {
    Link,
    router
} from "expo-router";
import CustomInput
    from "@/components/CustomInput";
import CustomButton
    from "@/components/CustomButton";

const SingUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [form, setForm] = useState({email : "", password : "", name : ""})

    const Submit = async () => {
        if(!form.email || !form.password || !form.name) {
            return Alert.alert("Error", "Please Enter Valid Password and Email and Name")
            setIsSubmitting(false);
        }
        setIsSubmitting(true);

        try{
            Alert.alert("Success", "user Signed Up Successfully.")
            router.replace("/")
        } catch (error : any){
            Alert.alert("Error", error.message)
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <View className={"gap-10 bg-white rounded-lg p-5 mt-5"}>

            <CustomInput
                placeholder="Enter your Full Name"
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({...prev, name: text}))}
                label="Full Name"
                keyboardType="default"

            />
            <CustomInput
                placeholder="Enter your Email"
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({...prev, email: text}))}
                label="Email"
                keyboardType="email-address"

            />

            <CustomInput
                placeholder="Enter your Password"
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({...prev, password: text}))}
                label="Password"
                secureTextEntry={true}

            />
            <CustomButton
                title={"Sign In"}
                isLoading={isSubmitting}
                onPress={Submit}
            />

            <View className={"flex justify-center mt-5 flex-row gap-2 "}>
                <Text className="base-regular text-gray-100">
                    Already have an account
                </Text>

                <Link href="/singIn" className="base-bold text-primary">Sign In</Link>
            </View>
        </View>
    );
};

export default SingUp;