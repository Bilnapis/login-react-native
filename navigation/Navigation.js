import { useAuth } from "../contexts/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AccountScreen from "../screens/AccountScreen";
import ForgotPassword from "../screens/ForgotPassword";

const Navigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const RootNavigator = () => {
    const { isAuthenticated } = useAuth();
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <RootStack.Screen name="App" component={AppNavigator} />
            ) : (
                <RootStack.Screen name="Auth" component={AuthNavigator} />
            )}
        </RootStack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={HomeScreen} />
            <AppStack.Screen name="Account" component={AccountScreen} />
        </AppStack.Navigator>
    );
};

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen
                name="ForgotPass"
                component={ForgotPassword}
                options={{
                    headerTitleAlign: "center",
                    title: "Forgot Password",
                    headerTitleStyle: { fontWeight: "bold" },
                }}
            />
        </AuthStack.Navigator>
    );
};

export default Navigation;
