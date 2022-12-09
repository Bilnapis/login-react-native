import { useAuth } from "../contexts/AuthContext";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableHighlight onPress={() => navigation.navigate("Account")}>
                <Text>Accountku</Text>
            </TouchableHighlight>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
