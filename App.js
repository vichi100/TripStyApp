import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './TabsScreen';
import FlightSearch from './screen/FlightSearch';
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlightSearchResultCard from './screen/FlightSearchResultCard';
import FlightReview from './screen/FlightReview';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function App() {
  const [inputDate, setInputDate] = React.useState(new Date());
  return (

    <SafeAreaProvider>
      {/* <FlightSearch/> */}
      {/* <FlightSearchResultCard/> */}
      <FlightReview/>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});