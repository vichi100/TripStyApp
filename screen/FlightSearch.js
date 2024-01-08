import * as React from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, Divider } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import moment from 'moment';
import dayjs from "dayjs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Modal, Portal, Provider, Button } from 'react-native-paper';
import { BottomSheet } from "react-native-btr";
import SegmentedControlTab from "react-native-segmented-control-tab";
import FlightSearchOneWay from '../screen/FlightSearchOneWay';
import FlightSearchReturn from '../screen/FlightSearchReturn';



const Tab = createMaterialTopTabNavigator();

const FlightSearch = (props) => {
    const { navigation } = props;
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
            <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', margin: 10, }}>
                <TouchableOpacity style={{}} onPress={() => { navigation.goBack(null) }}>

                    <MaterialIcons name="arrow-back-ios" color={"balck"} size={26} />
                </TouchableOpacity>
                <Text>Flight Search</Text>
            </View>

            <Tab.Navigator>
                <Tab.Screen name="One Way" component={FlightSearchOneWay} />
                <Tab.Screen name="Return" component={FlightSearchReturn} />
                {/* <Tab.Screen name="Multi City" component={SettingsScreen} /> */}
            </Tab.Navigator>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        marginBottom: 20,
        color: '#EA3546',
        fontFamily: 'OpenSans-Bold',
    },
    calendar: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
    },
    button: {
        width: '100%',
        height: 70,
        backgroundColor: '#EE5337',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
});

export default FlightSearch;