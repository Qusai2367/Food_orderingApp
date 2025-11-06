import React
    , {
    useState
} from 'react';
import {
    Text,
    TextInput,
    View
} from "react-native";
import {
    CustomInputProps
} from "@/type";
import cn
    from "clsx";



const CustomInput = ({
                         placeholder = "Enter text",
                         value,
                         onChangeText,
                         label,
                         secureTextEntry= false,
                         keyboardType = "default"
} : CustomInputProps) => {

    const [isFoucsed, setIsFoucsed] = useState(false)
    return (
        <View className="w-full ">
            <Text className="label">{label}</Text>

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onFocus={() => setIsFoucsed(true)}
                onBlur={() => setIsFoucsed(true)}
                placeholder={placeholder}
                placeholderTextColor="#888"
                className={cn("input", isFoucsed ? "border-primary" : "border-gray-300")}
            />
        </View>
    );
};

export default CustomInput;