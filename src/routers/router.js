import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../component/main";
import TodoList from "../component/TodoList";

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
          tabBarIconStyle: { display: "none" },
          tabBarLabelStyle: { color: "gray", fontSize: 16 },
        }}
      >
        <Tab.Screen
          name={PATHS.HOME}
          component={Main}
          options={{ headerShown: false }}
        />
        <Tab.Screen name={"Display"} component={TodoList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
