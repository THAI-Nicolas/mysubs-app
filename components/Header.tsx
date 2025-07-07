import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  onSettingsPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSettingsPress }) => {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white h-16 mt-8  border-b-dark-light border-b-2">
      {/* Logo MySubs */}
      <Image
        source={require("../assets/icones/logo-inapp.svg")}
        style={{ width: 65, height: 65 }}
        contentFit="contain"
      />

      {/* Titre de la page */}
      <Text className="font-urbanist-semibold text-xl text-dark mr-9 ">
        {title}
      </Text>

      {/* Bouton Settings temporaire */}
      <TouchableOpacity
        onPress={onSettingsPress}
        className="w-8 h-8 justify-center items-center"
      >
        <Image
          source={require("../assets/icones/settings-icon.svg")}
          style={{ width: 24, height: 24 }}
          contentFit="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
