import { Tabs, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import TabBar, { TabType } from "../../components/TabBar";

export default function TabLayout() {
  const [currentTab, setCurrentTab] = useState<TabType>("subscriptions");
  const pathname = usePathname();

  const getPageTitle = (activeTab: TabType): string => {
    const titles: Record<TabType, string> = {
      subscriptions: "Abonnements",
      calendar: "Calendrier",
      expenses: "Dépenses",
    };
    return titles[activeTab];
  };

  useEffect(() => {
    const pathToTab: Record<string, TabType> = {
      "/": "subscriptions",
      "/(tabs)": "subscriptions",
      "/(tabs)/": "subscriptions",
      "/(tabs)/calendar": "calendar",
      "/(tabs)/expenses": "expenses",
    };

    const newTab = pathToTab[pathname] || "subscriptions";
    setCurrentTab(newTab);
  }, [pathname]);

  return (
    <View className="flex-1 bg-white">
      <Header
        title={getPageTitle(currentTab)}
        onSettingsPress={() => console.log("Settings pressed")}
      />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => {
          const routeNames: Record<string, TabType> = {
            index: "subscriptions",
            calendar: "calendar",
            expenses: "expenses",
          };

          const activeRoute = props.state.routes[props.state.index];
          const activeTab = routeNames[activeRoute.name] || "subscriptions";

          return (
            <TabBar
              activeTab={activeTab}
              onTabPress={(tab) => {
                const tabRoutes: Record<TabType, string> = {
                  subscriptions: "index",
                  calendar: "calendar",
                  expenses: "expenses",
                };
                const routeName = tabRoutes[tab];
                const index = props.state.routes.findIndex(
                  (route) => route.name === routeName
                );
                if (index !== -1) {
                  props.navigation.navigate(props.state.routes[index].name);
                }
              }}
            />
          );
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="calendar" />
        <Tabs.Screen name="expenses" />
      </Tabs>
    </View>
  );
}
