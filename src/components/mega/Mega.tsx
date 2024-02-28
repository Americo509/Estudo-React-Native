import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQuantidadeNumero(qte: any) {
        this.setState({ qtdNumeros: +qte })
    }

    gerarNumeroNaoContido = (nums) => {
        const novo: number = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros() {
        const { qtdNumeros } = this.state
        const numeros = []
        for (let i = 0; i < qtdNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(this.gerarNumeroNaoContido(n))
        }

        numeros.sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType='numeric'
                    style={{ borderBottomWidth: 1 }}
                    placeholder='Quantidade de Números'
                    value={this.state.qtdNumeros}
                    onChangeText={(qtd) => this.alterarQuantidadeNumero(qtd)}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}
