import React from 'react';
import {View, Text, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import estilo from './estilo';

const Tab3 = () => {
    return (
        <ScrollView>
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Onde encontrar cada tipo de Pokémon em Pokémon GO?</Text> 
            <Image 
                 source={require('../../../assets/images/pokemongo/03.jpeg')}
                 style={estilo.image}
            />
           <Text style={estilo.texto}>ÁGUA: Aparecem perto de praias, lagos, rios e em geral perto de enormes massas de água.</Text>
           <Text style={estilo.texto}>DRAGÃO: Aparecem em monumentos e há ainda quem os tenham encontrado em campos de golf.</Text>
           <Text style={estilo.texto}>NORMAL: Habitual em zonas residenciais e universitárias.</Text>
           <Text style={estilo.texto}>TERRA: surgem em zonas agrícolas e espaços verdes.</Text>
           <Text style={estilo.texto}>PSÍQUICO: Podem ser encontrados em hospitais e zonas residenciais de noite ou ao entardecer.</Text>
           <Text style={estilo.texto}>LUTA: Habituais en ginásios, estádios e grandes zonas desportivas.</Text>
           <Text style={estilo.texto}>FOGO: Aparecem en zonas de cultivo e até em bombas de gasolina.</Text>
           <Text style={estilo.texto}>ROCHA: Zonas e parques naturais e áreas de cultivo é onde estão mais enraizados.</Text>
           <Text style={estilo.texto}>VENENO: Estão em zonas industriais e zonas húmidas como pântanos.</Text>
           <Text style={estilo.texto}>PLANTA: Habituais em zonas frondosas e parques.</Text>
           <Text style={estilo.texto}>ELÉCTRICO: Podes encontrá-los em cidades, zonas húmidas e campos universitários.</Text>
           <Text style={estilo.texto}>FANTASMA: Aparecem de noite e também em zonas residenciais.</Text>
           <Text style={estilo.texto}>GELO: Aparecem em lagos e zonas frondosas.</Text>
           <Text style={estilo.texto}>DESTINO: Encontrados em praias, estátuas e monumentos.</Text>
           <Text style={estilo.texto}>BICHO: Aparecem com mais frequência em bosques, zonas frondosas e espaços naturais.</Text>


        </View>
        </ScrollView>
    )
}

export default Tab3