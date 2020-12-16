<<<<<<< HEAD
import React, { useEffect } from 'react';
import {View, Text, Image, FlatList} from 'react-native'
import estilo from './estilo';



const Tab1 = ({route, navigation}) => {
    return(
        <View>
            <Text>01</Text>
        </View>
    )

}
=======
import React from 'react';
import {View, Image, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import estilo from './estilo';


const Tab1 = ({route, navigation}) => {
        return (
        <ScrollView>
        <View style={estilo.container}>
>>>>>>> 1e90f2c (upupupup)
        
           <Image 
                source={require('../../../assets/images/pokemons/01.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Bulbasaur</Text>
            <Text style={estilo.texto}>Nº 01</Text>
            <Text style={estilo.texto}>Planta/Venenoso</Text>
           <Image 
                source={require('../../../assets/images/pokemons/02.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Ivysaur</Text>
            <Text style={estilo.texto}>Nº 02</Text>
            <Text style={estilo.texto}>Planta/Venenoso</Text>
            <Image 
                source={require('../../../assets/images/pokemons/03.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Venusaur</Text>
            <Text style={estilo.texto}>Nº 03</Text>
            <Text style={estilo.texto}>Planta/Venenoso</Text>

            <Image 
                source={require('../../../assets/images/pokemons/04.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Charmander</Text>
            <Text style={estilo.texto}>Nº 04</Text>
            <Text style={estilo.texto}>Fogo</Text>

            <Image 
                source={require('../../../assets/images/pokemons/05.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Charmelon</Text>
            <Text style={estilo.texto}>Nº 05</Text>
            <Text style={estilo.texto}>Fogo</Text>

            <Image 
                source={require('../../../assets/images/pokemons/06.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Charizard</Text>
            <Text style={estilo.texto}>Nº 06</Text>
            <Text style={estilo.texto}>Fogo/Voador</Text>

            <Image 
                source={require('../../../assets/images/pokemons/07.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Squirte</Text>
            <Text style={estilo.texto}>Nº 07</Text>
            <Text style={estilo.texto}>Água</Text>

            <Image 
                source={require('../../../assets/images/pokemons/08.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Wartortle</Text>
            <Text style={estilo.texto}>Nº 08</Text>
            <Text style={estilo.texto}>Água</Text>

            <Image 
                source={require('../../../assets/images/pokemons/09.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Blastoise</Text>
            <Text style={estilo.texto}>Nº 09</Text>
            <Text style={estilo.texto}>Água</Text>

            <Image 
                source={require('../../../assets/images/pokemons/010.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Caterpi</Text>
            <Text style={estilo.texto}>Nº 10</Text>
            <Text style={estilo.texto}>Inseto</Text>

            <Image 
                source={require('../../../assets/images/pokemons/011.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Metapod</Text>
            <Text style={estilo.texto}>Nº 11</Text>
            <Text style={estilo.texto}>Inseto</Text>

            <Image 
                source={require('../../../assets/images/pokemons/012.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Butterfree</Text>
            <Text style={estilo.texto}>Nº 12</Text>
            <Text style={estilo.texto}>Inseto/Voador</Text>

            <Image 
                source={require('../../../assets/images/pokemons/013.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Weedle</Text>
            <Text style={estilo.texto}>Nº 13</Text>
            <Text style={estilo.texto}>Inseto/Venenoso</Text>

            <Image 
                source={require('../../../assets/images/pokemons/014.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Kakuma</Text>
            <Text style={estilo.texto}>Nº 14</Text>
            <Text style={estilo.texto}>Inseto/Venenoso</Text>

            <Image 
                source={require('../../../assets/images/pokemons/015.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Beedrill</Text>
            <Text style={estilo.texto}>Nº 15</Text>
            <Text style={estilo.texto}>Inseto/Venenoso</Text>

            <Image 
                source={require('../../../assets/images/pokemons/016.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Pidgey</Text>
            <Text style={estilo.texto}>Nº 16</Text>
            <Text style={estilo.texto}>Normal/Voador</Text>

            <Image 
                source={require('../../../assets/images/pokemons/017.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Pidgeotto</Text>
            <Text style={estilo.texto}>Nº 17</Text>
            <Text style={estilo.texto}>Normal/Voador</Text>

            <Image 
                source={require('../../../assets/images/pokemons/018.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Pidgeot</Text>
            <Text style={estilo.texto}>Nº 18</Text>
            <Text style={estilo.texto}>Normal/Voador</Text>

            <Image 
                source={require('../../../assets/images/pokemons/019.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Rattata</Text>
            <Text style={estilo.texto}>Nº 19</Text>
            <Text style={estilo.texto}>Normal</Text>

            <Image 
                source={require('../../../assets/images/pokemons/020.png')}
                                style={estilo.image}
           
           />
           <Text style={estilo.texto} >Raticate</Text>
            <Text style={estilo.texto}>Nº 20</Text>
            <Text style={estilo.texto}>Normal</Text>

            
            
            </View>
            </ScrollView>
    )
}

export default Tab1