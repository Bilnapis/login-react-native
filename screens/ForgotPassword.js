import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPassword = () => {
    return (
        <SafeAreaView>
            <View style={{ padding: 24 }}>
                <View>
                    <Text>Forgot Password</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;
