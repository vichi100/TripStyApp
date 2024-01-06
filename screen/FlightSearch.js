import * as React from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import moment from 'moment';
import dayjs from "dayjs";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal, Portal, Provider, Button } from 'react-native-paper';
import { BottomSheet } from "react-native-btr";


const HomeScreen = (defaultOptions) => {
    const [fromDeparture, setFromDeparture] = React.useState("");
    const [toDestination, setToDestination] = React.useState("");
    const [inputDate, setInputDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [count, setCount] = React.useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    function toggle() {
        setVisible((visible) => !visible);
      }


    return (
        <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>

            <TextInput
                mode='outlined'
                outlineColor='#DCDBD9'
                // activeOutlineColor='#EDDEBE'
                label="From"
                placeholder='Enter City or Airport name'
                value={fromDeparture}
                onChangeText={fromDeparture => setFromDeparture(fromDeparture)}
                style={{
                    color: 'white', backgroundColor: '#DCDBD9',
                    borderRadius: 5, width: '90%', height: '5%'
                }}
                right={<TextInput.Icon icon="airplane-takeoff" />}
            />

            <TextInput
                mode='outlined'
                outlineColor='#DCDBD9'
                // activeOutlineColor='#EDDEBE'
                label="To"
                placeholder='Enter City or Airport name'
                value={toDestination}
                onChangeText={toDestination => setToDestination(toDestination)}
                style={{
                    marginTop: 20,
                    color: 'white', backgroundColor: '#DCDBD9',
                    borderRadius: 5, width: '90%', height: '5%'
                }}
                right={<TextInput.Icon icon="airplane-landing" />}
            />




           


            <TextInput
                mode='outlined'
                outlineColor='#DCDBD9'
                // activeOutlineColor='#EDDEBE'
                // onFocus={alert('hi')}
                label="Date"
                onTouchStart={() => toggle()} 
                // disabled="true"
                editable="false"
                placeholder='Select Date'
                value={dayjs(selectedDate).format("DD MMM YYYY")}//{getFormatedDate(selectedDate, "DD/MMM/YYYY h:m")}
                onChangeText={toDestination => setToDestination(toDestination)}
                style={{
                    marginTop: 20,
                    color: 'white', backgroundColor: '#DCDBD9',
                    borderRadius: 5, width: '90%', height: '5%'
                }}
                right={<TextInput.Icon icon="calendar-month-outline" />}
            />



            <BottomSheet
                visible={visible}
                onBackButtonPress={toggle}
                onBackdropPress={toggle}
            >
                <View style={styles.card}>
                    <DatePicker
                        options={{
                            ...defaultOptions,
                            textFontSize: 14,
                            headerAnimationDistance: 100,
                            mainColor: '#EA3546',
                        }}
                        onSelectedChange={date => setSelectedDate(date)}
                        onMonthYearChange={date => alert(date)}
                        // onTimeChange={date => alert(date)}
                        onDateChange={date => alert(date)}
                        // current="today"
                        selected={getToday()}
                        minimumDate={getToday()}
                        // maximumDate="2020-07-25"
                        // selectorStartingYear={2000}
                        // selectorEndingYear={2030}
                        disableDateChange={false}
                        mode="calendar"
                        // minuteInterval={30}
                        style={styles.calendar}
                    />
                </View>
            </BottomSheet>


        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

const FlightSearch = () => {
    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="One Way" component={HomeScreen} />
                    <Tab.Screen name="Return" component={SettingsScreen} />
                    <Tab.Screen name="Multi City" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
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
});

export default FlightSearch;