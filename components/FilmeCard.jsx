import{StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import {AntDesign} from "@expo/vector-icons"
import {MaterialIcons} from '@expo/vector-icons'

export default function FilmeCard(filme){
    const [favorito, setFavorito] = useState(false)



    return(

        <View style={styles.card}>
            <Image style={styles.poster} source={{uri: filme.poster}}/>

            <View>
                <AntDesign name="star" size={18} color="gold"/>
                <Text style={styles.nota}>{filme.nota}</Text>
            </View>

            <TouchableOpacity onPress={() => setFavorito(!favorito)}>
                <MaterialIcons
                    name={favorito?"favorite":"favorite-border"}
                    size ={24}
                    color={favorito?"red":"white"}
                />
            </TouchableOpacity>


        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        width: 120,
        backgroundColor: '#2d2d2d',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 4,
    },
    nota: {
        color: '#FFF'
    },
    poster :{
        height: 180,
        width:120,
        borderRadius: 5,
    },
    viewNota: {
        flexDirection:'row',
        alignItems: 'center',
        gap: 8
    }
});