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


const FlightSearchScreen = (props) => {

    const { navigation } = props;

    const [fromDeparture, setFromDeparture] = React.useState("");
    const [toDestination, setToDestination] = React.useState("");
    const [inputDate, setInputDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [count, setCount] = React.useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    const [visible, setVisible] = React.useState(false);
    const [travellersModelVisible, setTravellersModelVisible] = React.useState(false);
    const [classModelVisible, setClassModelVisible] = React.useState(false);

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleSingleIndexSelect = (index) => {
        // For single Tab Selection SegmentedControlTab
        setSelectedIndex(index);
    };

    const [childSelectedIndex, setChildSelectedIndex] = React.useState(0);
    const handleChildSingleIndexSelect = (index) => {
        // For single Tab Selection SegmentedControlTab
        setChildSelectedIndex(index);
    };

    const [infantSelectedIndex, setInfantSelectedIndex] = React.useState(0);
    const handleInfantSingleIndexSelect = (index) => {
        // For single Tab Selection SegmentedControlTab
        setInfantSelectedIndex(index);
    };

    const [classSelectedIndex, setClassSelectedIndex] = React.useState(0);
    const handleClassSingleIndexSelect = (index) => {
        // For single Tab Selection SegmentedControlTab
        setClassSelectedIndex(index);
    };


    // const showModal = () => setVisible(true);
    // const hideModal = () => setVisible(false);
    // const containerStyle = { backgroundColor: 'white', padding: 20 };

    const toggleDatePicker = () => {
        setVisible((visible) => !visible);
    }

    const toggleTravellers = () => {
        setTravellersModelVisible((travellersModelVisible) => !travellersModelVisible);
    }

    const toggleClassPicker = () => {
        setClassModelVisible((classModelVisible) => !classModelVisible);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', margin: 10 }}>

                    <TextInput
                        mode='flat'
                        outlineColor='#DADADA'
                        activeOutlineColor='#EDDEBE'
                        selectionColor="black"
                        label={<Text style={{ fontSize: 18, fontWeight: 400 }}>From</Text>}
                        placeholder='Enter City / Airport name'
                        placeholderStyle={{ fontSize: 8 }}
                        value={fromDeparture}
                        onChangeText={fromDeparture => setFromDeparture(fromDeparture)}
                        style={{
                            color: 'white', backgroundColor: '#E6E6E6', marginTop: 20,
                            borderRadius: 5, width: '95%', height: 60, fontSize: 18, fontWeight: 700
                        }}
                        right={<TextInput.Icon icon="airplane-takeoff" />}
                    />

                    <TextInput
                        mode='flat'
                        outlineColor='#DADADA'
                        activeOutlineColor='#EDDEBE'
                        label={<Text style={{ fontSize: 18, fontWeight: 400 }}>To</Text>}
                        placeholder='Enter City / Airport name'
                        value={toDestination}
                        onChangeText={toDestination => setToDestination(toDestination)}
                        style={{
                            marginTop: 15,
                            color: 'white', backgroundColor: '#E6E6E6',
                            borderRadius: 5, width: '95%', height: 60, fontSize: 18, fontWeight: 700
                        }}
                        right={<TextInput.Icon icon="airplane-landing" />}
                    />

                    <TextInput
                        mode='flat'
                        outlineColor='#DADADA'
                        activeOutlineColor='#EDDEBE'
                        // onFocus={alert('hi')}
                        label={<Text style={{ fontSize: 18, fontWeight: 600 }}>Date</Text>}
                        onTouchStart={() => toggleDatePicker()}
                        // disabled="true"
                        editable="false"
                        placeholder='Select Date'
                        value={dayjs(selectedDate).format("DD MMM YYYY")}//{getFormatedDate(selectedDate, "DD/MMM/YYYY h:m")}
                        onChangeText={toDestination => setToDestination(toDestination)}
                        style={{
                            marginTop: 15,
                            color: 'white', backgroundColor: '#E6E6E6',
                            borderRadius: 5, width: '95%', height: 60, fontSize: 18, fontWeight: 700
                        }}
                        right={<TextInput.Icon icon="calendar-month-outline" />}
                    />
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            mode='flat'
                            outlineColor='#DADADA'
                            activeOutlineColor='#EDDEBE'
                            // onFocus={alert('hi')}
                            label={<Text style={{ fontSize: 18, fontWeight: 600 }}>Travellers</Text>}
                            onTouchStart={() => toggleTravellers()}
                            // disabled="true"
                            editable="false"
                            placeholder='Select Date'
                            value="1"
                            onChangeText={toDestination => setToDestination(toDestination)}
                            style={{
                                marginTop: 20,
                                color: 'white', backgroundColor: '#E6E6E6',
                                borderRadius: 5, width: '47%', height: 60,

                            }}
                            right={<TextInput.Icon icon="chevron-down" />}
                        />

                        <TextInput
                            mode='flat'
                            outlineColor='#DADADA'
                            activeOutlineColor='#EDDEBE'
                            // onFocus={alert('hi')}
                            label={<Text style={{ fontSize: 18, fontWeight: 600 }}>Class</Text>}
                            onTouchStart={() => toggleClassPicker()}
                            // disabled="true"
                            editable="false"
                            // placeholder='Select Date'
                            value="Economy"
                            onChangeText={toDestination => setToDestination(toDestination)}
                            style={{
                                marginTop: 20, marginLeft: 5,
                                color: 'white', backgroundColor: '#E6E6E6',
                                borderRadius: 5, width: '47%', height: 60
                            }}
                            right={<TextInput.Icon icon="chevron-down" />}
                        />

                    </View>



                    {/* DatePicker bottom sheet */}
                    <BottomSheet
                        visible={visible}
                        onBackButtonPress={toggleDatePicker}
                        onBackdropPress={toggleDatePicker}
                    >
                        <View>
                            <DatePicker
                                options={{
                                    ...props,
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

                    {/* Traver bottom sheet */}
                    <BottomSheet
                        visible={travellersModelVisible}
                        onBackButtonPress={toggleTravellers}
                        onBackdropPress={toggleTravellers}
                    >
                        <View style={{ height: '40%', backgroundColor: 'white' }}>
                            <View style={{ margin: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 10 }}>No of travellers</Text>
                                <Divider style={{ color: 'black', height: 1, marginBottom: 10 }} />
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Adults  12+ years</Text>

                                    <View style={{ marginTop: 10 }}>
                                        <SegmentedControlTab
                                            values={["0", "1", "2", "3", "4", "5", "7", "8", "9"]}
                                            selectedIndex={selectedIndex}
                                            // tabStyle={styles.tabStyle}
                                            // activeTabStyle={styles.activeTabStyle}
                                            onTabPress={handleSingleIndexSelect}

                                        />
                                    </View>

                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Child  02-12 years</Text>

                                    <View style={{ marginTop: 10 }}>
                                        <SegmentedControlTab
                                            values={["0", "1", "2", "3", "4", "5", "7", "8", "9",]}
                                            selectedIndex={childSelectedIndex}
                                            // tabStyle={styles.tabStyle}
                                            // activeTabStyle={styles.activeTabStyle}
                                            onTabPress={handleChildSingleIndexSelect}

                                        />
                                    </View>

                                </View>

                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Child  0-02 years</Text>

                                    <View style={{ marginTop: 10 }}>
                                        <SegmentedControlTab
                                            values={["0", "1", "2", "3", "4", "5", "7", "8", "9"]}
                                            selectedIndex={infantSelectedIndex}
                                            // tabStyle={styles.tabStyle}
                                            // activeTabStyle={styles.activeTabStyle}
                                            onTabPress={handleInfantSingleIndexSelect}

                                        />
                                    </View>

                                </View>
                            </View>

                        </View>

                    </BottomSheet>


                    {/* Class bottom sheet */}

                    <BottomSheet
                        visible={classModelVisible}
                        onBackButtonPress={toggleClassPicker}
                        onBackdropPress={toggleClassPicker}
                    >
                        <View style={{ height: '40%', backgroundColor: 'white' }}>
                            <View style={{ margin: 10 }}>
                                
                                <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 10 }}>Select your cabin class</Text>
                                <Divider style={{ color: 'black', height: 1, marginBottom: 10 }} />

                                <SegmentedControlTab
                                    values={['Economy', 'Premium Economy', 'Bussiness', 'First Class']}
                                    selectedIndex={classSelectedIndex}
                                    onTabPress={handleClassSingleIndexSelect}
                                    borderRadius={0}
                                    tabsContainerStyle={{
                                        height: 200,
                                        backgroundColor: '#F2F2F2',
                                        flexDirection: 'column',
                                        marginTop:10

                                    }}
                                    tabStyle={{
                                        backgroundColor: '#F2F2F2',
                                        borderWidth: .5,
                                        borderColor: 'black',
                                    }}


                                // activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
                                // tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
                                // activeTabTextStyle={{ color: '#888888' }}
                                />
                            </View>
                        </View>

                    </BottomSheet>
                </View>
            </ScrollView>
            <View style={{ borderWidth: 1, position: 'absolute', bottom: 0, alignSelf: 'center', justifyContent: 'center', width: '100%', }}>

                <TouchableOpacity style={[styles.button, { height: 50 }]} onPress={() => { navigation.navigate("FlightSearchResultCard") }}>

                    <Text style={{
                        fontWeight: 600, fontSize: 16,
                        color: 'white',
                    }}>SEARCH</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
                <Tab.Screen name="One Way" component={FlightSearchScreen} />
                <Tab.Screen name="Return" component={SettingsScreen} />
                <Tab.Screen name="Multi City" component={SettingsScreen} />
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