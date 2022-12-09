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
            <View style={{ padding: 24 }}>
                <View>
                    <Text>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={user}
                        onChangeText={(text) => setUser(text)}
                    />
                </View>
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableHighlight
                    onPress={() => login(user, password)}
                    style={styles.button}
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
    input: {
        backgroundColor: "#FFFFFF",
        padding: 8,
        borderWidth: 1,
        borderColor: "#ADADAD",
        borderRadius: 8,
    },
    button: {
        padding: 4,
        backgroundColor: "yellow",
        alignItems: "center",
    },
    buttonForgotPassword: {
        alignSelf: "center",
    },
});
