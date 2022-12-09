import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={user}
                        onChangeText={(text) => setUser(text)}
                        placeholder="Fill your username"
                    />
                </View>
                <View style={styles.separator} />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Fill your password"
                />
                <View style={styles.separator} />
                <View style={styles.separator} />
                <TouchableHighlight
                    onPress={() => login(user, password)}
                    style={styles.buttonLogin}
                >
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight
                style={styles.buttonForgotPassword}
                onPress={() => navigation.navigate("ForgotPass")}
            >
                <Text>Forgot password?</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    label: {
        marginBottom: 4,
        fontWeight: "500",
    },
    input: {
        borderWidth: 1,
        borderColor: "#A3A3A3",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: "#FFFFFF",
    },
    buttonLogin: {
        padding: 8,
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: "yellow",
    },
    buttonForgotPassword: {
        alignSelf: "center",
    },
    separator: {
        padding: 8,
    },
});
