import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logo: {
        width: 200,
        height: 200,
    },
    inputs: {
        width: '80%',
        flex: 1
    },
    imagem: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 7,
        fontWeight: "bold",
        color: "#000"

    },
    botaoEntrar: {
        backgroundColor: '#e3350d',
        padding: 10,
        marginBottom: 10,
        borderRadius: 7, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoEntrar: {
        fontWeight: 'bold',
        color: '#fff'
    },
    botaoCriar: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 7,
        color: 'white',
        textAlign: 'center',
        
        alignItems: 'center',
        justifyContent: 'center'
    },
        textoCriar: {
        fontWeight: 'bold',
        color: 'white'        
    },

})

export default estilo;



