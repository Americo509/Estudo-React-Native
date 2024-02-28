import React from 'react';
import { View, Text } from 'react-native';
import Estilo from './estilo';
import If from './If';

export default props => {
    const usuario = props.usuario || {};
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.fontG}>Usuario logado:</Text>
                <Text style={Estilo.fontG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    );
};
