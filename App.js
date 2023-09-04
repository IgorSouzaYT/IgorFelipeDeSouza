import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
//import { StyleSheet, Text, View } from "react-native";
import react from "react";
import { SafeAreaView, StyleSheet } from "react-native"; 
import LoginScreen from './src/LoginScreen';
const App = () => {
    return (
        <SafeAreaView>
            <LoginScreen/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;