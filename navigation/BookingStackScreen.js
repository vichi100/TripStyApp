import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";


const Stack = createStackNavigator();

const BookingStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",

                // headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#ffffff"
                },
                headerBackTitleVisible: false,
                headerTintColor: "black"
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

export default BookingStackScreen;