import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface FABProps {
  onPress: () => void;
}

const FAB: React.FC<FABProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute bottom-36 self-center z-50"
      style={{
        width: 70,
        height: 70,
        borderRadius: 34.5,
        backgroundColor: "#FAFAFA",
        borderWidth: 4,
        borderColor: "#051D40",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.15,
        shadowRadius: 16,
        elevation: 10,
      }}
    >
      <View className="flex-1 justify-center items-center">
        <Text
          style={{
            fontSize: 32,
            fontWeight: "400",
            color: "#051D40",
            lineHeight: 28,
          }}
        >
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FAB;
