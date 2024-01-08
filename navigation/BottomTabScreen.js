import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


import { createStackNavigator } from "@react-navigation/stack";
import HomeStackScreen from './HomeStackScreen';
import BookingStackScreen from './BookingStackScreen';
import ProfileStackScreen from './ProfileStackScreen';


const BottomTabScreen = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    const  CartIcon = ({navigation}) =>{
        return (
          <MaterialCommunityIcons
            name={'netflix'}
            onPress={() => navigation.navigate('Cart Screen')}
          />
        );
      }

    return (
        <Tab.Navigator
            // initialRouteName="Home"
            lazy={false}
            activeColor="rgb(135,206,235)"
            inactiveColor="rgb(105,105,105)"
            barStyle={{ backgroundColor: "#ffffff", paddingBottom: 0 }}
            // screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                // lazy={false}
                name="TripSty"
                component={HomeStackScreen}
                title="My Properties"
                // options={{ title: "Profile", }}
                options={{
                    headerShown: false ,
                    headerRight: (props) => <CartIcon {...props} navigation={navigation} />,
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="view-grid-outline"
                            color={color}
                            size={26}
                        />
                    )
                }}

                // options={({route, navigation}) => ({
                //     headerRight: (props) => <CartIcon {...props} navigation={navigation} />,
                //     title: 'Shop',
                //     headerStyle: {
                //     //   backgroundColor: 'black',
                //     },
                //     headerShown: false ,
                //   })}
            />

            <Tab.Screen
                name="Bookings"
                component={BookingStackScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ticket" color={color} size={26} />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    )
                }}
            />



        </Tab.Navigator>

    )
}  

export default BottomTabScreen;