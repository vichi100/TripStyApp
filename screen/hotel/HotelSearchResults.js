
import * as React from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, Divider, Surface, Button } from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



const HotelSearchResults = (props) => {

    const { navigation } = props;

    const [rating, setRating] = React.useState(4);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', margin: 10, }}>
                <TouchableOpacity style={{}} onPress={() => { navigation.goBack(null) }}>

                    <MaterialIcons name="arrow-back-ios" color={"balck"} size={26} />
                </TouchableOpacity>
                <View>
                    <Text>Goa, India</Text>
                    <Text>10 Jan 2024 | 12 Jan 2024</Text>
                </View>
            </View>
            <ScrollView>

            <TouchableOpacity style={{}} onPress={() => { navigation.navigate("HotelDetails") }}>
                <Surface style={styles.surface} elevation={1}>

                    <Image
                        style={{ width: '100%', height: 190 }}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <StarRating
                                rating={rating}
                                onChange={setRating}
                                // style={{width:5}}
                                starStyle={{ width: 1, margin: 1 }}
                                starSize="15"
                                color="black"
                            />
                            <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, marginLeft: 15 }}>
                                <Text style={{ margin: 5, fontSize: 12 }}>Resort</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: 5 }}>
                                <Text >Awesome</Text>
                                <Text >167 Reviews</Text>
                            </View>
                            <View style={{ height: 30, width: 30, backgroundColor: '#75C48B', borderRadius: 5 }}>
                                <Text style={{ margin: 5 }}>4.5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: 500 }}>Stone Water Resort</Text>
                        <Text style={{ fontSize: 10, fontWeight: 500 }}>Goa, Anjuna</Text>
                    </View>

                    <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Exclusive Deal</Text>
                        <View>
                            <Text style={{ textAlign: 'right', fontSize: 15, fontWeight: 500, textDecorationLine: 'line-through', color: 'red' }}>&#8377;5900</Text>
                            <Text style={{ textAlign: 'right', fontSize: 20, fontWeight: 500, }}>&#8377;3100</Text>
                            <Text style={{ textAlign: 'right' }}>+411 Taxes & fee</Text>
                            <Text style={{ textAlign: 'right' }}>per night</Text>
                        </View>

                    </View>


                </Surface>
                </TouchableOpacity>


                <Surface style={styles.surface} elevation={1}>

                    <Image
                        style={{ width: '100%', height: 190 }}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <StarRating
                                rating={rating}
                                onChange={setRating}
                                // style={{width:5}}
                                starStyle={{ width: 1, margin: 1 }}
                                starSize="15"
                                color="black"
                            />
                            <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, marginLeft: 15 }}>
                                <Text style={{ margin: 5, fontSize: 12 }}>Resort</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: 5 }}>
                                <Text >Awesome</Text>
                                <Text >167 Reviews</Text>
                            </View>
                            <View style={{ height: 30, width: 30, backgroundColor: '#75C48B', borderRadius: 5 }}>
                                <Text style={{ margin: 5 }}>4.5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: 500 }}>Stone Water Resort</Text>
                        <Text style={{ fontSize: 10, fontWeight: 500 }}>Goa, Anjuna</Text>
                    </View>

                    <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Exclusive Deal</Text>
                        <View>
                            <Text style={{ textAlign: 'right', fontSize: 15, fontWeight: 500, textDecorationLine: 'line-through', color: 'red' }}>&#8377;5900</Text>
                            <Text style={{ textAlign: 'right', fontSize: 20, fontWeight: 500, }}>&#8377;3100</Text>
                            <Text style={{ textAlign: 'right' }}>+411 Taxes & fee</Text>
                            <Text style={{ textAlign: 'right' }}>per night</Text>
                        </View>

                    </View>


                </Surface>




                <Surface style={styles.surface} elevation={1}>

                    <Image
                        style={{ width: '100%', height: 190 }}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <StarRating
                                rating={rating}
                                onChange={setRating}
                                // style={{width:5}}
                                starStyle={{ width: 1, margin: 1 }}
                                starSize="15"
                                color="black"
                            />
                            <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 5, marginLeft: 15 }}>
                                <Text style={{ margin: 5, fontSize: 12 }}>Resort</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: 5 }}>
                                <Text >Awesome</Text>
                                <Text >167 Reviews</Text>
                            </View>
                            <View style={{ height: 30, width: 30, backgroundColor: '#75C48B', borderRadius: 5 }}>
                                <Text style={{ margin: 5 }}>4.5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 22, fontWeight: 500 }}>Stone Water Resort</Text>
                        <Text style={{ fontSize: 10, fontWeight: 500 }}>Goa, Anjuna</Text>
                    </View>

                    <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontWeight: 500 }}>Exclusive Deal</Text>
                        <View>
                            <Text style={{ textAlign: 'right', fontSize: 15, fontWeight: 500, textDecorationLine: 'line-through', color: 'red' }}>&#8377;5900</Text>
                            <Text style={{ textAlign: 'right', fontSize: 20, fontWeight: 500, }}>&#8377;3100</Text>
                            <Text style={{ textAlign: 'right' }}>+411 Taxes & fee</Text>
                            <Text style={{ textAlign: 'right' }}>per night</Text>
                        </View>

                    </View>


                </Surface>


            </ScrollView>

        </SafeAreaView>
    )
}

export default HotelSearchResults;

const styles = StyleSheet.create({
    surface: {
        // padding: 2,
        height: 400,
        width: '97%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
        margin: 5
    },

});