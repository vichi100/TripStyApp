import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";
import FlightSearch from "../screen/FlightSearch";
import FlightSearchResultCard from '../screen/FlightSearchResultCard';
import FlightBooking from '../screen/FlightBooking';
import FlightReview from '../screen/FlightReview';

const Stack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: "center",

                // headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: "#ffffff"
                },
                headerBackTitleVisible: false,
                headerTintColor: "black",
                headerShown: false
            }}
        >
            <Stack.Screen
                name="TripSty"
                component={HomeScreen}
            // options={{ title: "Profile", headerShown: false }}

            />

            <Stack.Screen
                name="FlightSearch"
                component={FlightSearch}
                options={{ title: "Flight Search" }}
            />

            <Stack.Screen
                name="FlightSearchResultCard"
                component={FlightSearchResultCard}
                // options={{ title: "", headerShown: true }}
                options={({ route, navigation }) => ({
                    headerRight: (props) => <CartIcon {...props} navigation={navigation} />,
                    title: 'Shop',
                    headerStyle: {
                        //   backgroundColor: 'black',
                    },
                    headerShown: false,
                })}
            />


            <Stack.Screen
                name="FlightBooking"
                component={FlightBooking}
                options={{ title: "Flight Search" }}
            />

            <Stack.Screen
                name="FlightReview"
                component={FlightReview}
                options={{ title: "Flight Search" }}
            />




        </Stack.Navigator>
    )
}

export default HomeStackScreen;