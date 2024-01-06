import * as React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DatePickerInput } from 'react-native-paper-dates';


const HomeScreen = (props) => {
    const { onPress, title = 'Save' } = props;

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
            <Pressable style={[styles.button, { backgroundColor: '#00D0FF' }]} onPress={onPress}>
                <MaterialIcons name="flight" size={30} color="black" />
            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: '#0DCB58' }]} onPress={onPress}>
                <MaterialIcons name="hotel" size={30} color="black" />
            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: '#E69C07' }]} onPress={onPress}>
            <MaterialIcons name="explore" size={30} color="black" />
            </Pressable>


            
        </View>
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