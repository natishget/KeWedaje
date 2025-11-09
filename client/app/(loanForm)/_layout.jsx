// import { Slot } from "expo-router";
// export default function loanFormLayout() {
//   return <Slot />;
// }

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
          tabBarInactiveTintColor:
            Colors[colorScheme ?? "light"].tabIconDefault,
          tabBarStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].background,
            borderTopWidth: 0,
            position: Platform.OS === "ios" ? "absolute" : "relative",
          },
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
        }}
      >
        {/* <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: "Contact",
            tabBarIcon: ({ color, focused }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        /> */}
        {/* <Tabs.Screen
          name="register"
          options={{
            title: "Register",
            tabBarIcon: ({ color, focused}) => (
              <IconSymbol size={28} name=""
            )
          }} */}
      </Tabs>
    </>
  );
}
