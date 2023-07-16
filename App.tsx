import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { AuthProvider } from "./src/context/Auth/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1E86E0" barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
