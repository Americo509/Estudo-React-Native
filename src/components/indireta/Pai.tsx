import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Estilo from '../estilo';
import Filho from './Filho';

export default props => {

    const [texto, setTExto] = useState('')
    const [num, setNum] = useState(0);

    function exibirValor(numero, texto) {
        setNum(numero);
        setTExto(texto);
    }

    return (
        <>
            <Text style={Estilo.fontG}>
                {texto} {num}
            </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    );
};
