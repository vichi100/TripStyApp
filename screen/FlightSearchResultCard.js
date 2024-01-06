import * as React from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/MaterialCommunityIcons';


const FlightSearchResultCard = () => {



    return (
        <View style={{ marginTop: 80 }}>

            <Card style={{ marginTop: 20 }}>
                <Card.Content style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{}}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />

                        </View>
                        <Text style={{ fontSize: 12, fontWeight: 400, marginLeft: 10 }}>Indigo</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text variant="titleLarge" style={{ marginTop: 20, marginRight: 10, fontWeight: 700, fontSize: 14 }}>12:15</Text>
                                {/* <Entypo name="airplane-takeoff" size={20} color="green" /> */}
                                <Text style={{ marginRight: '0', marginTop: 5 }}>RPR</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginLeft: '12%', marginRight: '12%', marginTop: 15 }}>
                                <Text style={{ fontWeight: 600, fontSize: 12, color: '#92918F' }}>2h</Text>
                                <View style={{ flexDirection: 'row'}}>
                                <Text>---</Text>
                                    <Ionicons name="airplane-sharp" size={15} color="green" style={{marginLeft:5, marginRight:5}} />
                                    <Text>---</Text>
                                </View>
                                <Text style={{ fontWeight: 600, fontSize: 12, color: '#92918F' }}>Non Stop</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Text variant="bodyMedium" style={{ marginTop: 20, marginLeft: 20, fontWeight: 700, fontSize: 14 }}>14:10</Text>
                                {/* <Entypo name="airplane-landing" size={20} color="green" /> */}
                                <Text style={{ marginLeft: 20, marginTop: 5 }}>MUM</Text>
                            </View>

                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 600, marginRight: 10, fontFamily: 'serif', alignItems: 'flex-end' }}>₹ 5448</Text>
                        {/* <View style={{
                            height: '100%',
                            width: .5,
                            backgroundColor: '#909090',
                            
                        }}/> */}
                        {/* <View style={{ }}>
                            <Text style={{  fontSize:18, fontWeight:800}}>₹ 5448</Text>
                        </View> */}
                    </View>

                    {/* <View style={{ width: '100%', height: .5, backgroundColor: '#E2E1DE', margin: 10 }} /> */}

                    <View style={{ alignItems: 'flex-end', }}>


                        <Button icon="airplane" mode="contained" buttonColor="#EE5337" onPress={() => console.log('Pressed')}>
                            Book
                        </Button>

                    </View>


                </Card.Content>
            </Card>

            <Card style={{ marginTop: 20 }}>
                <Card.Content style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{}}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text variant="titleLarge" style={{ marginTop: 20, marginLeft: 10, marginRight: 10, fontWeight: 700, fontSize: 14 }}>12:15</Text>
                            <View style={{ width: '35%', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 600, fontSize: 12, color: '#92918F' }}>2h</Text>
                                <View style={{ width: '100%', height: 1, backgroundColor: 'black', margin: 10 }} />
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ marginRight: '30%' }}>RPR</Text>
                                    <Text style={{ marginLeft: '0%', fontWeight: 600, fontSize: 12, color: '#92918F' }}>Non Stop</Text>
                                    <Text style={{ paddingLeft: '25%' }}>MUM</Text>
                                </View>
                            </View>
                            <Text variant="bodyMedium" style={{ marginTop: 20, marginLeft: 20, fontWeight: 700, fontSize: 14 }}>14:10</Text>

                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 600, marginRight: 10, fontFamily: 'serif', }}>₹ 5448</Text>
                        {/* <View style={{
                            height: '100%',
                            width: .5,
                            backgroundColor: '#909090',
                            
                        }}/> */}
                        {/* <View style={{ }}>
                            <Text style={{  fontSize:18, fontWeight:800}}>₹ 5448</Text>
                        </View> */}
                    </View>

                    {/* <View style={{ width: '100%', height: .5, backgroundColor: '#E2E1DE', margin: 10 }} /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>

                        <Text style={{ fontSize: 12, fontWeight: 400, marginRight: 10 }}>Indigo</Text>
                        <Button icon="airplane" mode="contained" onPress={() => console.log('Pressed')}>
                            Book
                        </Button>

                    </View>


                </Card.Content>
            </Card>

            <Card style={{ marginTop: 20 }}>
                <Card.Content style={{ backgroundColor: '#FFFFFF' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{}}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Text variant="titleLarge" style={{ marginTop: 20, marginLeft: 10, marginRight: 10, fontWeight: 700, fontSize: 14 }}>12:15</Text>
                            <View style={{ width: '35%', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 600, fontSize: 12, color: '#92918F' }}>2h</Text>
                                <View style={{ width: '100%', height: 1, backgroundColor: 'black', margin: 10 }} />
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ marginRight: '30%' }}>RPR</Text>
                                    <Text style={{ marginLeft: '0%', fontWeight: 600, fontSize: 12, color: '#92918F' }}>Non Stop</Text>
                                    <Text style={{ paddingLeft: '25%' }}>MUM</Text>
                                </View>
                            </View>
                            <Text variant="bodyMedium" style={{ marginTop: 20, marginLeft: 20, fontWeight: 700, fontSize: 14 }}>14:10</Text>

                        </View>
                        <Text style={{ fontSize: 20, fontWeight: 600, marginRight: 10, fontFamily: 'serif', }}>₹ 5448</Text>
                        {/* <View style={{
                            height: '100%',
                            width: .5,
                            backgroundColor: '#909090',
                            
                        }}/> */}
                        {/* <View style={{ }}>
                            <Text style={{  fontSize:18, fontWeight:800}}>₹ 5448</Text>
                        </View> */}
                    </View>

                    {/* <View style={{ width: '100%', height: .5, backgroundColor: '#E2E1DE', margin: 10 }} /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>

                        <Text style={{ fontSize: 12, fontWeight: 400, marginRight: 10 }}>Indigo</Text>
                        <Button icon="airplane" mode="contained" onPress={() => console.log('Pressed')}>
                            Book
                        </Button>

                    </View>


                </Card.Content>
            </Card>

        </View>
    )
}

export default FlightSearchResultCard;


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
        width: 25,
        height: 25,
    },
});