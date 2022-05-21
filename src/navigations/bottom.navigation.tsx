import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import FeaturesPage from "../pages/features.page";
import FloorPlanPage from "../pages/floorPlan.page";
import ExteriorPage from "../pages/exterior.page";
import InteriorPage from "../pages/interior.page";
import AppliancesPage from "../pages/appliances.page";

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Features"
        screenOptions={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
          tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15,
            borderStyle: "solid",
            borderBottomWidth: 2,
            borderBottomColor: "red",
          },
          tabBarStyle: {
            backgroundColor: "black",
          },
        }}
    >
      <Tab.Screen
        name="Floor Plan"
        component={FloorPlanPage}
      />
      <Tab.Screen
        name="Exterior"
        component={ExteriorPage}
      />
      <Tab.Screen
        name="Interior"
        component={InteriorPage}
      />
      <Tab.Screen
        name="Features"
        options={{
        }}
        component={FeaturesPage}
      />
      <Tab.Screen
        name="Appliances"
        component={AppliancesPage}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
