import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Main from "../component/main";
import StackRouterNav from "./stackRouter";
import { Text } from "react-native";

export default function Router() {
  const Tab = createBottomTabNavigator();
  const PATHS = {
    HOME: "Home Page",
    COMPLETED_TASKS: "Completed Tasks",
    DETAILS: "Todo Details",
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarItemStyle: {},
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: { color: "gray", fontSize: 16 },
        }}
      >
        <Tab.Screen
          name={PATHS.HOME}
          component={Main}
          options={{
            tabBarLabel: ({ color, focused }) => (
              <Text style={{ color: focused ? "green" : color }}>Home</Text>
            ),
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? "green" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"Todoes list"}
          component={StackRouterNav}
          options={{
            tabBarLabel: ({ color, focused }) => (
              <Text style={{ color: focused ? "green" : color }}>List</Text>
            ),
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name="list-ul"
                size={24}
                color={focused ? "green" : "gray"}
              />
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
