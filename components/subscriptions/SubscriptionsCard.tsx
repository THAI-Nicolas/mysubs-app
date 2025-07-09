import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Subscription } from "../../types/subscription";

interface SubscriptionCardProps {
  subscription: Subscription;
  onPress?: (subscription: Subscription) => void;
  onEdit?: (subscription: Subscription) => void;
  onDelete?: (subscription: Subscription) => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
  onPress,
}) => {
  const getFrequencyLabel = () => {
    const frequencyLabels = {
      weekly: "/semaine",
      monthly: "/mois",
      quarterly: "/trimestre",
      yearly: "/an",
    };
    return frequencyLabels[subscription.frequency];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <TouchableOpacity
      onPress={() => onPress?.(subscription)}
      style={{
        width: 363,
        height: 75,
        backgroundColor: "#FAFAFA",
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderBottomWidth: 5,
        borderColor: "#051D40",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 8,
        alignSelf: "center",
        marginVertical: 8,
      }}
      className="flex-row items-center"
    >
      {/* Logo de l'abonnement */}
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
          borderRadius: 4,
          backgroundColor: "#E5E5E5",
        }}
      >
        {subscription.logoUrl ? (
          <Image
            source={{ uri: subscription.logoUrl }}
            style={{ width: 40, height: 40, borderRadius: 4 }}
            contentFit="cover"
          />
        ) : (
          <View className="flex-1 justify-center items-center">
            <Text className="text-primary font-urbanist-bold text-sm">
              {subscription.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
      </View>

      {/* Titre + Date */}
      <View style={{ marginLeft: 14, flex: 1 }}>
        <Text
          className="font-urbanist-bold text-dark text-lg"
          numberOfLines={1}
        >
          {subscription.name}
        </Text>
        <Text
          className="font-urbanist-medium text-sm mt-[-2]"
          style={{ color: "#595959" }}
        >
          {formatDate(subscription.nextPayment)}
        </Text>
      </View>

      {/* Prix */}
      <View style={{ marginRight: 20 }}>
        <Text className="text-right" numberOfLines={1}>
          <Text className="font-urbanist-bold text-dark text-xl">
            {subscription.price.toFixed(2)}€
          </Text>
          <Text className="font-urbanist-medium text-dark text-base">
            {getFrequencyLabel()}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubscriptionCard;
