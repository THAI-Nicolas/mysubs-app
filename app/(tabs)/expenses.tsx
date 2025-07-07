import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function ExpensesScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-urbanist-bold text-dark mb-4">
          Dépenses
        </Text>
        <Text className="text-gray font-urbanist-medium">
          Ici s'afficheront vos statistiques de dépenses...
        </Text>
      </View>
    </ScrollView>
  );
}
