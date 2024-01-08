import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight, Image, SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';



const FlightBooking = (props) => {
    const { navigation } = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', margin: 10, }}>
                <TouchableOpacity style={{}} onPress={() => { navigation.goBack(null) }}>

                    <MaterialIcons name="arrow-back-ios" color={"balck"} size={26} />
                </TouchableOpacity>
                <View>
                    <Text>New Delhi to Mumbai</Text>
                    {/* <Text>10 Jan 2024 | 10:24 - 12:30</Text> */}
                </View> 
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 600 }}>RPR</Text>
                        {/* <Text style={{fontSize:45, fontWeight:600, marginLeft: 5, marginRight:5}}>-</Text> */}
                        <Entypo name="aircraft-take-off" size={35} color="#0BACDC" style={{ marginLeft: 10, marginRight: 10 }} />
                        <Text style={{ fontSize: 30, fontWeight: 600 }}>MUM</Text>
                    </View>
                    <Text style={{ fontSize: 14, marginTop: 5 }}>4 Jan 2024 | Sunday | 10:30-12:30</Text>
                </View>



                <Card style={{ borderRadius: 15, backgroundColor: '#FFFFFF', margin: 5, marginTop: 15 }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>Saver</Text>
                            <Text style={{ fontSize: 13, fontWeight: 400 }}>Economy</Text>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>₹ 5448</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 7 }}>
                            <MaterialCommunityIcons name="bag-personal-outline" size={20} color="#5F615F" />
                            <Text style={{ marginLeft: 20 }}>Cabin Bag</Text>
                            <Text style={{ marginLeft: 35 }}>7Kg</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <MaterialCommunityIcons name="bag-suitcase-outline" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Checkin Bag</Text>
                            <Text style={{ marginLeft: 20 }}>15Kg</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                            <MaterialIcons name="airline-seat-recline-normal" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Seat</Text>
                            <Text style={{ marginLeft: 75 }}>Chargeable</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                            <MaterialCommunityIcons name="food-outline" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Meal</Text>
                            <Text style={{ marginLeft: 75 }}>Chargeable</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', }}>
                            <Button icon="airplane" mode="contained" buttonColor="#EE5337" onPress={() => navigation.navigate("FlightReview")}>
                                Book
                            </Button>
                        </View>
                    </Card.Content>
                </Card>


                <Card style={{ borderRadius: 15, backgroundColor: '#FFFFFF', margin: 5, marginTop: 15 }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>Saver</Text>
                            <Text style={{ fontSize: 13, fontWeight: 400 }}>Premium Economy</Text>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>₹ 5448</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 7 }}>
                            <MaterialCommunityIcons name="bag-personal-outline" size={20} color="#5F615F" />
                            <Text style={{ marginLeft: 20 }}>Cabin Bag</Text>
                            <Text style={{ marginLeft: 35 }}>7Kg</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <MaterialCommunityIcons name="bag-suitcase-outline" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Checkin Bag</Text>
                            <Text style={{ marginLeft: 20 }}>15Kg</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                            <MaterialIcons name="airline-seat-recline-normal" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Seat</Text>
                            <Text style={{ marginLeft: 75 }}>Free</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                            <MaterialCommunityIcons name="food-outline" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Meal</Text>
                            <Text style={{ marginLeft: 75 }}>Chargeable</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', }}>
                            <Button icon="airplane" mode="contained" buttonColor="#EE5337" onPress={() => navigation.navigate("FlightReview")}>
                                Book
                            </Button>
                        </View>
                    </Card.Content>
                </Card>

                <Card style={{ borderRadius: 15, backgroundColor: '#FFFFFF', margin: 5, marginTop: 15 }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>Saver</Text>
                            <Text style={{ fontSize: 13, fontWeight: 400 }}>Bussiness</Text>
                            <Text style={{ fontSize: 16, fontWeight: 600 }}>₹ 5448</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 7 }}>
                            <MaterialCommunityIcons name="bag-personal-outline" size={20} color="#5F615F" />
                            <Text style={{ marginLeft: 20 }}>Cabin Bag</Text>
                            <Text style={{ marginLeft: 35 }}>7Kg</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <MaterialCommunityIcons name="bag-suitcase-outline" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Checkin Bag</Text>
                            <Text style={{ marginLeft: 20 }}>25Kg</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                            <MaterialIcons name="airline-seat-recline-normal" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Seat</Text>
                            <Text style={{ marginLeft: 75 }}>Free</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 5 }}>
                            <MaterialCommunityIcons name="food-outline" size={20} color="#5F615F" style={{ marginLeft: 7 }} />
                            <Text style={{ marginLeft: 20 }}>Meal</Text>
                            <Text style={{ marginLeft: 75 }}>Free</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', }}>
                            <Button icon="airplane" mode="contained" buttonColor="#EE5337" onPress={() => navigation.navigate("FlightReview")}>
                                Book
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </SafeAreaView>

    )
}

export default FlightBooking;


const styles = StyleSheet.create({
    cardCircle: {
        borderRadius: 100,
        width: 140,
        height: 140,
        backgroundColor: "red",
        elevation: 10,
    },
    cardCircleContent: {
        flex: 1,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    tinyLogo: {
        width: 45,
        height: 45,
    },
});