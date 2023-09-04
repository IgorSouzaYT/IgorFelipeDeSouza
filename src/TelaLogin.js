import React from 'react';
import {View,Text, InputText, StyleSheet} from 'react-native';

const FlexDimensionsBasics = () => {
    return (
        //Try removing the 'flex: 1' on the parent View.
        //The parent will not have dimensios, so the children can't expand.
        //What if you add 'height: 300' instead of 'flex: 1'?
        <View style={{flex: 1}}>
            <View style ={{flex: 1, backgroundColor: 'powderblue'}} />
            <Text style ={styles.heading}> Tela de Login </Text>
        </View>
    );
};

    const styles = StyleSheet.create({
        heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        },
    });

    export default FlexDimensionsBasics;