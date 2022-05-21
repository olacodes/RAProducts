import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import FeaturesPage from "../pages/features.page";
import FloorPlanPage from "../pages/floorPlan.page";
import ExteriorPage from "../pages/exterior.page";
import InteriorPage from "../pages/interior.page";
import AppliancesPage from "../pages/appliances.page";
import TopLeftNavigation from "./topLeft.navigation";

const Tab = createBottomTabNavigator();

const options = () => ({
  headerTitle: "",
  header: (props: any) => <TopLeftNavigation {...props} />,
});

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
      <Tab.Screen name="Exterior" options={options} component={ExteriorPage} />
      <Tab.Screen
        name="Floor Plan"
        options={options}
        component={FloorPlanPage}
      />
      <Tab.Screen name="Interior" options={options} component={InteriorPage} />
      <Tab.Screen name="Features" options={options} component={FeaturesPage} />
      <Tab.Screen
        options={options}
        name="Appliances"
        component={AppliancesPage}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
