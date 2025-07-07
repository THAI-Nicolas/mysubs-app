import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Medium": require("../assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("../assets/fonts/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-primary">Chargement MySubs...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
