import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default () => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor="#900" lado={20} />
            <Quadrado cor="#090" lado={30} />
            <Quadrado cor="#009" lado={40} />
            <Quadrado cor="#999" lado={50} />
        </View>
    );
};

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    },
});
