import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text>AccountScreen</Text>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: <FontAwesome name="gear" size={20} />,
};

export default AccountScreen;
