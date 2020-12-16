import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        alignItems: 'left',
        backgroundColor: '#d2dae2',
        
               
    },

    image : {
        width: 150,
        height: 150,
        marginTop: 12,
        fontSize: 20,
        flexDirection: 'row',
        margin: 10
    },
    texto:{
        fontSize: 20,
        flexDirection: 'row',
        margin: 5
    },

    perfil: {
        width: 20,
        height: 20,
        flexDirection: 'row',
        marginTop: 2

    },

    img: {
        width: 40,
        height: 40,
        alignItems: 'flex-start',
        marginTop: 5
    },

     card : {
        width: 350,
        backgroundColor: 'white',
    }

})

export default estilo;