
import * as React from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput, Divider, Surface } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import moment from 'moment';
import dayjs from "dayjs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Modal, Portal, Provider, Button } from 'react-native-paper';
import { BottomSheet } from "react-native-btr";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Octicons from 'react-native-vector-icons/Octicons';
import { SliderBox } from "react-native-image-slider-box";
import StarRating from 'react-native-star-rating-widget';
import PercentageBar from '../../components/PercentageBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





const HotelDetails = (props) => {
    const { navigation } = props;

    const [rating, setRating] = React.useState(4);

    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        // require('./assets/images/girl.jpg'),          // Local image
    ]


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"

                    />

                    <View style={{ height: 45, padding: 10, position: 'absolute', alignSelf: 'flex-start', backgroundColor: '#5B5D5F', opacity: .5, alignItems: 'center', borderRadius: 5 }}>
                        <TouchableOpacity style={{}} onPress={() => { navigation.goBack(null) }}>
                            <MaterialIcons name="arrow-back-ios" color={"white"} size={26} />
                        </TouchableOpacity>
                    </View>
                    {/* // Heart */}
                    <View style={{ height: 45, padding: 10, position: 'absolute', alignSelf: 'flex-end', xalignItems: 'center', borderRadius: 5 }}>
                        <TouchableOpacity style={{}} onPress={() => { navigation.goBack(null) }}>
                            <MaterialCommunityIcons name="heart-outline" color={"white"} size={26} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 22, fontWeight: 500 }}>Stone Water Resort</Text>
                            <Text style={{ fontSize: 10, fontWeight: 500 }}>Goa, Anjuna</Text>
                        </View>
                        <StarRating
                            rating={rating}
                            onChange={setRating}
                            // style={{width:5}}
                            starStyle={{ width: 1, margin: 1 }}
                            starSize="15"
                            color="black"
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Surface style={{ margin: 10, backgroundColor: "white", borderRadius: 5, }} elevation={4}>
                            <View style={{ alignItems: 'center', width: 100, height: 90 }}>
                                <View style={{ backgroundColor: '#E2E2E2', borderRadius: 5, width: '100%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 600, fontSize: 14 }}>CHECK-IN</Text>
                                </View>
                                <View style={{ marginBottom: 10, marginTop: 10, alignItems: 'center' }}>
                                    <Text>10 JAN 2024</Text>
                                    <Text style={{ fontWeight: 400, fontSize: 12, marginTop: 5 }}>02:00 PM</Text>
                                </View>
                            </View>
                        </Surface>
                        <View style={{ alignItems: 'center' }}>
                            <Text> 1 Night/s</Text>
                            <Divider style={{ height: 1, width: 90, backgroundColor: 'white' }} />
                        </View>
                        <Surface style={{ margin: 10, backgroundColor: "white", borderRadius: 5, }} elevation={4}>
                            <View style={{ alignItems: 'center', width: 100, height: 90 }}>
                                <View style={{ backgroundColor: '#E2E2E2', borderRadius: 5, width: '100%', height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 600, fontSize: 14 }}>CHECK-OUT</Text>
                                </View>
                                <View style={{ marginBottom: 10, marginTop: 10, alignItems: 'center' }}>
                                    <Text>10 JAN 2024</Text>
                                    <Text style={{ fontWeight: 400, fontSize: 12, marginTop: 5 }}>02:00 PM</Text>
                                </View>
                            </View>
                        </Surface>

                    </View>
                    {/* // Rating n Review */}

                    <Surface elevation={4} style={{ backgroundColor: 'white', margin: 10, borderRadius: 10 }}>
                        <Text style={{ margin: 10, fontSize: 18, fontWeight: 500 }}>Review & Ratings</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ width: 120, height: 120, backgroundColor: '#12A0F1', margin: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 25, fontWeight: 500 }}>3.5</Text>
                                    <Text>Good</Text>
                                </View>
                                <Text style={{ marginLeft: 10 }}>175 Reviews</Text>
                            </View>

                            <View style={{ marginTop: 10, width: '60%', }}>
                                <View style={styles.spacer}>
                                    <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: 600 }}>Excelent</Text>
                                    <PercentageBar starText="5 star" percentage={84} />
                                </View>
                                <View style={styles.spacer}>
                                    <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: 600 }}>Good</Text>
                                    <PercentageBar starText="4 star" percentage={9} />
                                </View>
                                <View style={styles.spacer}>
                                    <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: 600 }}>Ok</Text>
                                    <PercentageBar starText="3 star" percentage={4} />
                                </View>
                                <View style={styles.spacer}>
                                    <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: 600 }}>Poor</Text>
                                    <PercentageBar starText="2 star" percentage={2} />
                                </View>
                                <View style={styles.spacer}>
                                    <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: 600 }}>Terible</Text>
                                    <PercentageBar starText="1 star" percentage={1} />
                                </View>
                            </View>
                        </View>

                    </Surface>

                    {/* // Amenities */}

                    <Surface elevation={4} style={{ backgroundColor: 'white', margin: 10, borderRadius: 10, }}>
                        <Text style={{ margin: 10, fontSize: 18, fontWeight: 500 }}>Amenities</Text>
                        <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Ionicons name="restaurant-outline" size={26} />
                                <Text>Restaurent</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Ionicons name="wine-outline" size={26} />
                                <Text>Bar</Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <MaterialIcons name="pool" size={26} />
                                <Text>Swming Pool</Text>
                            </View>
                        </View>
                        <View style={{ margin: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Ionicons name="wifi-outline" size={26} />
                                <Text>Free WiFi</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <MaterialCommunityIcons name="car-outline" size={26} />
                                <Text>Car</Text>
                            </View>

                            <View style={{ alignItems: 'center' }}>
                                <Ionicons name="chevron-down" size={26} />
                                <Text>View More</Text>
                            </View>
                        </View>
                    </Surface>

                    {/* // Property rules */}

                    <Surface elevation={4} style={{ backgroundColor: 'white', margin: 10, borderRadius: 10, }}>
                        <Text style={{ margin: 10, fontSize: 18, fontWeight: 500 }}>Rules & Info</Text>
                        <View style={{ borderWidth: 1, borderColor: 'black', margin: 10, borderRadius: 10 }}>
                            <View style={{ margin: 10 }}>
                                <Text style={{ color: 'green', fontSize: 15 }}>Couple, Bachelore Rules</Text>
                                <Text>Unmaried couples/guests with Local IDs are allowed </Text>
                            </View>
                        </View>
                        <View style={{ margin: 10, }}>
                            <Text>* Guest below 18 years not allowed</Text>
                            <Text>* Passport, Adhar, Driving License and Govt IDs are allowed</Text>
                            <Text>* Pets are not allowed</Text>
                            <Text>* Outside food not allowed</Text>
                            <Text style={{ textAlign: 'right', color: 'blue' }}>More</Text>
                        </View>

                    </Surface>

                    {/* // Google map with location */}

                    <Surface elevation={4} style={{ backgroundColor: 'white', margin: 10, borderRadius: 10, }}>
                        <Text style={{ margin: 10, fontSize: 18, fontWeight: 500 }}>Location</Text>
                        <Text>Include google map with location here</Text>

                    </Surface>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HotelDetails;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F8FF",
        alignItems: "center",
        justifyContent: "center",
    },

    spacer: {
        marginBottom: 0,
        // alignItems:'center'
    },

});