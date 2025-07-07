import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function CalendarScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-urbanist-bold text-dark mb-4">
          Calendrier
        </Text>
        <Text className="text-gray font-urbanist-medium">
          Ici s'affichera votre calendrier des paiements...
        </Text>
      </View>
    </ScrollView>
  );
}
