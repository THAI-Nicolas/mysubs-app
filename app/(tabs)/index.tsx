import React from "react";
import { ScrollView, Text, View } from "react-native";
import SubscriptionCard from "../../components/subscriptions/SubscriptionsCard";
import { mockSubscriptions } from "../../data/mockSubscriptions";

export default function SubscriptionsScreen() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 py-4">
        <Text className="text-primary font-urbanist-bold text-xl mb-4">
          Mes Abonnements
        </Text>

        {mockSubscriptions.map((subscription) => (
          <SubscriptionCard
            key={subscription.id}
            subscription={subscription}
            onPress={(sub) => console.log("Pressed:", sub.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
