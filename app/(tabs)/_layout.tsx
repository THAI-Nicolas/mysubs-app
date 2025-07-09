import { Tabs, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import TabBar, { TabType } from "../../components/TabBar";

export default function TabLayout() {
  const [currentTitle, setCurrentTitle] = useState("Abonnements");
  const router = useRouter();

  const getPageTitle = (activeTab: TabType): string => {
    const titles: Record<TabType, string> = {
      subscriptions: "Abonnements",
      calendar: "Calendrier",
      expenses: "Dépenses",
    };
    return titles[activeTab];
  };

  return (
    <View className="flex-1 bg-white">
      <Header
        title={currentTitle}
        onSettingsPress={() => console.log("Settings pressed")}
      />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        screenListeners={{
          state: (e) => {
            if (e.data && e.data.state) {
              const routes = e.data.state.routes;
              const index = e.data.state.index;
              const activeRoute = routes[index];

              const routeNames: Record<string, TabType> = {
                index: "subscriptions",
                calendar: "calendar",
                expenses: "expenses",
              };

              const activeTab = routeNames[activeRoute.name] || "subscriptions";
              const newTitle = getPageTitle(activeTab);
              setCurrentTitle(newTitle);
            }
          },
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
