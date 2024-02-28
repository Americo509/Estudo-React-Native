import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import Quadrado from './components/layout/Quadrado';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import FlexboxV2 from './components/layout/FlexBoxV2';
// import FlexboxV3 from './components/layout/FlexBoxV3';
// import FlexboxV4 from './components/layout/FlexBoxV4';
import Mega from './components/mega/Mega';

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdNumeros={7} />
    {/* <Botao />
    <FlexboxV4 />
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{ nome: 'Gustavo', email: 'americorosagustavo@gmail.com' }} />
    <UsuarioLogado usuario={{ nome: 'Isabella' }} />
    <UsuarioLogado usuario={{ email: 'belabotan@gmail.com' }} />
    <UsuarioLogado usuario={{}} />
    <UsuarioLogado usuario={null} />
    <Familia>
      <Membro nome="Isabella" sobrenome="Botan" />
      <Membro nome="Gustavo" sobrenome="Americo" />
    </Familia>
    <Familia>
      <Membro nome="Gilberto" sobrenome="Rosa" />
      <Membro nome="Andreia" sobrenome="Americo" />
    </Familia>
    <ParImpar num={3} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" />
    <Aleatorio min={1} max={60} />
    <MinMax min={3} max={20} />
    <MinMax min="1" max="94" />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
