import React from 'react';
import {View, Text, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import estilo from './estilo';

const Tab2 = () => {
    return (
        <ScrollView>
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Historia dos Pokemons</Text>
            <Text style={estilo.texto}>Você sabe muito bem o que é e como funciona o Mundo Pokémon? Esse universo surgiu graças à popular franquia de games criada pela Nintendo e é muito maior e complexo do que você pode imaginar. Como muitos já sabem desde a época dos jogos da franquia, o Mundo Pokémon é dividido em regiões que são inspiradas em locais do mundo real. Kanto, Johto, Hoenn e Sinnoh são inspiradas em áreas geográficas do Japão.Já Unova é inspirada em Nova York, Kalos é baseada na França, Alola é uma cópia das ilhas do Havaí e Galar, que ainda fará sua estreia na franquia, é semelhante às Ilhas Britânicas. Em muitos casos, os Pokémons acabam afetados pelo clima e características desses locais. Isso é mais evidente da região de Alola, em que muitos Pokémons são diferentes de suas contrapartes normais.</Text>
            
            <Image  
                    source={require('../../../assets/images/historia/pokemons.jpg')}
                    style={estilo.image}

            />
        </View>
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Humanos no Pokemon </Text>
            <Text style={estilo.texto}>Sim, a sociedade humana do Mundo Pokémon teve de aprender a coexistir com os poderosos monstrinhos. Um foco importante desta sociedade é a caça e o treinamento dos Pokémon para duelos e competições, mas sabemos que vai muito além disso. Por exemplo, os monstros do tipo elétrico ajudam a abastecer casas e prédios com energia elétrica; os que voam levam pessoas de um lado para outro (mesmo com a existência de carros, barcos e aviões), alguns ajudam em construções e outros são fundamentais para manter alguns ecossistemas. Também é importante lembrar que em algumas culturas de determinadas regiões, alguns Pokémon são venerados pela população. Em Johto, na cidade de Ecruteak, existiam as Torres Tin e Brass, onde viviam os lendários Lugia e Ho-oh. Mas quando a segunda foi destruída em um incêndio, eles deixaram o local. Três monstrinhos morreram nessa tragédia, mas eles foram revividos por Ho-oh e se tornaram Raikou, Entei e Suicune. Além disso, outro ponto que afeta a cultura humana é que existem evidências de vida pós-morte no Mundo Pokémon. Não apenas por conta da existência dos monstrinhos do tipo fantasma, mas todos os espíritos que já apareceram nos games da franquia, como é o caso do da mãe do Pokémon Marowak na cidade de Lavender. No entanto, não sabemos se esses espíritos são reais ou uma mera brincadeira dos Pokémon fantasma para assustar os humanos. E, claro, não podemos nos esquecer que a própria humanidade acabou criando alguns monstinhos. Esse é o caso de Grimer e Muk, produtos de poluição, por exemplo.
            </Text>
            <Image 
                    source={require('../../../assets/images/historia/humanos.jpg')}
                    style={estilo.image}
            />

        </View>
        </ScrollView>
    )
}

export default Tab2