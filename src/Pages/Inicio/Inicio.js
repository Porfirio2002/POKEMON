import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import estilo from './estilo';

const Inicio = () => {
    return(
        <View style={estilo.container}>
                 <View style={estilo.nome}>
               <Text style={estilo.texto}>Pokemon01</Text>
               <Text style={estilo.texto}>Tipo</Text>
               <Text style={estilo.texto}>N°</Text>
               </View>

            <View >
                    <Image  
                        source={require('../../../assets/images/pikachu.png')}
                                style={estilo.imagem}
                     />
                </View>
           
                <View style={estilo.nome}>
               <Text style={estilo.texto}>Pokemon01</Text>
               <Text style={estilo.texto}>Tipo</Text>
               <Text style={estilo.texto}>N°</Text>
               </View>

            <View >
                    <Image  
                        source={require('../../../assets/images/pikachu.png')}
                                style={estilo.imagem}
                     />
                </View>

                <View style={estilo.nome}>
               <Text style={estilo.texto}>Pokemon01</Text>
               <Text style={estilo.texto}>Tipo</Text>
               <Text style={estilo.texto}>N°</Text>
               </View>

            <View >
                    <Image  
                        source={require('../../../assets/images/pikachu.png')}
                                style={estilo.imagem}
                     />
                </View>

                </View>
    )
}

export default Inicio