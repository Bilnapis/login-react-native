import { useAuth } from "../contexts/AuthContext";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const AccountScreen = () => {
    const { logout } = useAuth();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.textLarge}>Acoount</Text>
            <TouchableHighlight onPress={logout}>
                <Text style={styles.button}>Logout</Text>
            </TouchableHighlight>
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    textLarge: {
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        padding: 8,
    },
});
