import React from 'react';
import { Text, View } from 'react-native';
import Estilo from './estilo';

export default ({ num = 0 }) => {
    return (
        <View>
            <Text>O Resultado eh:</Text>
            {num % 2 === 0
                ? <Text style={Estilo.fontG}>Par</Text>
                : <Text style={Estilo.fontG}>Impar</Text>
            }
        </View>
    );
};
