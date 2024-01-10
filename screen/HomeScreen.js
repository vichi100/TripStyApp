import * as React from 'react';
import { Text, StyleSheet, Pressable, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = (props) => {
    const { navigation } = props;
    const { onPress, title = 'Save' } = props;


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>

            

            <View style={{ height: 30, flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent:'center' }}>
                <TouchableOpacity style={{}} onPress={() => { navigation.goBack(null) }}>

                    {/* <MaterialIcons name="arrow-back-ios" color={"balck"} size={26} /> */}
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>TripSty</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                <Pressable style={[styles.button, { backgroundColor: '#00D0FF' }]} onPress={() => { navigation.navigate("FlightSearch") }}>
                    <MaterialIcons name="flight" size={30} color="black" />
                </Pressable>
                <Pressable style={[styles.button, { backgroundColor: '#0DCB58' }]} onPress={() => { navigation.navigate("HotelsSearch") }}>
                    <MaterialIcons name="hotel" size={30} color="black" />
                </Pressable>
                
                <Pressable style={[styles.button, { backgroundColor: '#E69C07' }]} onPress={onPress}>
                    <MaterialIcons name="explore" size={30} color="black" />
                </Pressable>
            </View>

            <View>
                {/* <Text>Your Recent Searches</Text> */}
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 10,
        elevation: 3,

        padding: 5,
        margin: 30

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});