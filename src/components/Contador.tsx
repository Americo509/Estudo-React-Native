import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Estilo from './estilo';

export default props => {
    // let numero = props.inicial;
    const [numero, setNumero] = useState(props.inicial);

    const inc = () => setNumero(numero + props.passo);
    const dec = () => setNumero(numero - props.passo);

    return (
        <>
            <Text style={Estilo.fontG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    );
};
