import React, { useMemo, useState } from 'react';
import { Text, View, StatusBar, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import RadioForm from 'react-native-simple-radio-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const FlightReview = (props) => {

    const { navigation } = props;

    const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
    const options = [
        { label: 'Yes, secure my trip', value: 'in' },
        { label: 'I am willing to risk my trip', value: 'out' },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', margin: 10, }}>
                <TouchableOpacity style={{}} onPress={() => { navigation.goBack(null) }}>

                    <MaterialIcons name="arrow-back-ios" color={"balck"} size={26} />
                </TouchableOpacity>
                <View>
                    <Text>Review Booking</Text>
                    {/* <Text>10 Jan 2024 | 10:24 - 12:30</Text> */}
                </View> 
            </View>
            <KeyboardAwareScrollView>
                <ScrollView>
                    <View style={styles.card}>
                        <View style={{ backgroundColor: '#59C4EB', }}>
                            <View style={{ margin: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Entypo name="aircraft" size={35} color="black" style={{ marginLeft: 0, marginRight: 10 }} />
                                <View style={{ height: '90%', width: 1, backgroundColor: '#909090', }} />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Delhi</Text>
                                        <Text>  to  </Text>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Mumbai</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>20 Jan 2023 |</Text>
                                        <Text> 10:30-12:15 </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text> 1 Adult | 0 child</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, margin: 5, flexDirection: 'row', }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Text>Indigo</Text>
                                <Text>5G 112</Text>
                            </View>
                            <View style={{ position: 'absolute', top: 0, left: 300 }}>
                                <Text>Saver</Text>
                            </View>

                        </View>
                        <View style={{ marginTop: 20, margin: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                // paddingTop: 30,
                                padding: 8,
                            }}>
                                <Text style={{ fontSize: '20', fontWeight: 600 }}>22:55</Text>
                                <Text>Delhi</Text>
                                <Text>5 Jan, Sunday</Text>
                                <Text>Indira Gandhi International</Text>
                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <Ionicons name="timer-outline" size={25} color="#0BACDC" style={{ marginLeft: 0, marginRight: 10 }} />
                                <Text>02h 15m</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                // paddingTop: 30,
                                padding: 8,
                            }}>
                                <Text style={{ fontSize: '20', fontWeight: 600, textAlign: 'right' }}>10:55</Text>
                                <Text style={{ textAlign: 'right' }}>Mum</Text>
                                <Text style={{ textAlign: 'right' }}>5 Jan, Sunday</Text>
                                <Text style={{ textAlign: 'right' }}>Chhatrapati Shivaji International</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.card, { height: 230 }]}>

                        <View style={{ backgroundColor: '#5ADFDF', }}>
                            <View style={{ margin: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Fontisto name="persons" size={35} color="black" style={{ marginLeft: 0, marginRight: 10 }} />
                                <View style={{ height: '90%', width: 1, backgroundColor: '#909090', }} />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Travellers</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Text> 1 Adult | 0 child | 0 Infant</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name="person" size={20} color="black" style={{ marginLeft: 0, marginRight: 10 }} />
                                <Text>Mr Vichi Singh</Text>
                            </View>
                            <MaterialIcons name="remove-circle-outline" size={20} color="black" style={{ marginLeft: 0, marginRight: 10 }} />
                        </View>
                        <View style={{ alignSelf: 'flex-end', marginTop: 20 }}>
                            <Button style={{ width: 120 }} icon="account-plus" mode='outlined' onPress={() => console.log('Pressed')}>
                                Add
                            </Button>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'flex-end', marginTop: 30 }}>
                            <Text>Name must be same as Govt Id proof</Text>
                        </View>
                    </View>


                    {/* Contact Info */}

                    <View style={[styles.card, { height: 290 }]}>

                        <View style={{ backgroundColor: '#77EFBD', }}>
                            <View style={{ margin: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Fontisto name="person" size={35} color="black" style={{ marginLeft: 0, marginRight: 10 }} />
                                <View style={{ height: '90%', width: 1, backgroundColor: '#909090', }} />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Contact Info</Text>
                                    </View>

                                </View>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15, margin: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <Text style={{ fontSize: 16, fontWeight: 500 }}>Please proved below details</Text>
                            </View>


                        </View>
                        <View style={{ margin: 15 }}>
                            <TextInput
                                label="Email"
                                value={"text"}
                                mode='outlined'
                                onChangeText={text => setText(text)}
                            />

                            <TextInput
                                label="Mobile"
                                value={"text"}
                                mode='outlined'
                                onChangeText={text => setText(text)}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                            <Text>Verify Email</Text>
                            <Text>Verify Mobile</Text>
                        </View>


                    </View>




                    {/* Insurance */}

                    <View style={[styles.card, { height: 230 }]}>

                        <View style={{ backgroundColor: '#ECF8BA', }}>
                            <View style={{ margin: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="shield-airplane" size={35} color="black" style={{ marginLeft: 0, marginRight: 10 }} />
                                <View style={{ height: '90%', width: 1, backgroundColor: '#909090', }} />
                                <View style={{ marginLeft: 20 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Travel Insurance</Text>
                                    </View>

                                </View>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                            </View>


                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 500 }}>Secure your trip in just &#8377; 199/- only</Text>
                            <RadioForm
                                radio_props={options}
                                initial={0} //initial value of this group
                                onPress={(value) => {
                                    setChosenOption(value);
                                }} //if the user changes options, set the new value
                                style={{ margin: 10 }}
                            />

                        </View>


                    </View>

                </ScrollView>
            </KeyboardAwareScrollView>
            <View style={[styles.bottom, { flexDirection: 'row', }]}>
                <TouchableOpacity style={[styles.button, { backgroundColor: '#EE5337', padding: 10 }]}>
                    {/* <Text style={styles.buttonText}>Grand Total</Text> */}
                    <Text style={styles.buttonText}>Total &#8377; 5679</Text>


                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={[styles.button, { hight: 100 }]}>

                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default FlightReview;



const styles = StyleSheet.create({
    card: {
        margin: 5,
        backgroundColor: 'white',
        // borderTopLeftRadius:150, 
        borderRadius: 15,
        // padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: '97%',
        height: 280,
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    tinyLogo: {
        width: 35,
        height: 35,
    },
    button: {
        width: '50%',
        height: 60,
        backgroundColor: '#EE5337',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
});