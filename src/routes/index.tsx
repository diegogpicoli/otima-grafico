import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Pages/Login";
import Graphic from "../Pages/Graphic";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Graphic"
        component={Graphic}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
