import "./global.css"
import {
    SplashScreen,
    Stack
} from "expo-router";
import {
    useFonts
} from "expo-font";
import {
    useEffect
} from "react";


export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Quicksand-bold": require('../assets/fonts/Quicksand-Bold.ttf'),
        "Quicksand-medium": require('../assets/fonts/Quicksand-Medium.ttf'),
        "Quicksand-regular": require('../assets/fonts/Quicksand-Regular.ttf'),
        "Quicksand-light": require('../assets/fonts/Quicksand-Light.ttf'),
        "Quicksand-semiBlod": require('../assets/fonts/Quicksand-SemiBold.ttf'),
    })
    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded,error])
  return <Stack screenOptions = {{headerShown: false}}/>;
}
