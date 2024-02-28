import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default () => {
    return (
        <View style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor="#900" />
            <Quadrado cor="#090" />
            <Quadrado cor="#009" />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: '#000',
    },
});
