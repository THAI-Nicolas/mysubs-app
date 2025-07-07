import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type TabType = "subscriptions" | "calendar" | "expenses";

interface TabBarProps {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

interface TabItem {
  id: TabType;
  label: string;
  icon: any;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabPress }) => {
  const tabs: TabItem[] = [
    {
      id: "subscriptions",
      label: "Abonnements",
      icon: require("../assets/icones/subscriptions-icon.svg"),
    },
    {
      id: "calendar",
      label: "Calendrier",
      icon: require("../assets/icones/calendar-icon.svg"),
    },
    {
      id: "expenses",
      label: "Dépenses",
      icon: require("../assets/icones/amount-icon.svg"),
    },
  ];

  const renderTab = (tab: TabItem) => {
    const isActive = activeTab === tab.id;

    return (
      <TouchableOpacity
        key={tab.id}
        onPress={() => onTabPress(tab.id)}
        className={`flex-1 items-center justify-center py-3 ${
          isActive ? "bg-primary" : "bg-transparent"
        }`}
      >
        <Image
          source={tab.icon}
          style={{
            width: 24,
            height: 24,
            tintColor: isActive ? "#FAFAFA" : "#030F20",
            marginBottom: 1,
          }}
          contentFit="contain"
        />
        <Text
          className={`mt-1 text-md font-urbanist-medium ${
            isActive ? "text-white" : "text-dark"
          }`}
        >
          {tab.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-row h-28 bg-white border-t border-dark-light">
      {tabs.map(renderTab)}
    </View>
  );
};

export default TabBar;
