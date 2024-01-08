
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";


const Stack = createStackNavigator();

const ProfileStackScreen = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",

                // headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#ffffff"
                },
                headerBackTitleVisible: false,
                headerTintColor: "rgba(105,105,105, .9)"
            }}
        >
            <Stack.Screen
                name="Profile"
                component={HomeScreen}
                options={{ title: "Profile", headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default ProfileStackScreen;