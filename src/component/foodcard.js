import React from "react";
import {View, Image, Text, StyleSheet,TouchableOpacity ,ImageBackground} from "react-native";
import FooddetailScreen from "../screen/FooddetailScreen.js"

const foodcard = ({post, navigation}) => {
    return(
        <View style={{flex:1,alignItems:"center"}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Food')}>
        <View style={styles.cardview}>
            <ImageBackground
            source={{uri:post.img}}
            style={{width:312,height:184,borderRadius:10}}
            imageStyle={{ borderRadius: 10 }}
            >
            <View style={{flex:1,
            justifyContent:'flex-end',
            borderRadius:10
            }}>
            <View style={styles.thumbnailContainerStyle}>
                <Image
                source={{uri:post.userphoto}}
                style={styles.userphoto}
                />
                <View style={styles.fooddetailname}>
                    <Text style={{color:'#fff',fontSize:10}}>{post.name}</Text>
                    <Text style={{color:'#fff',fontSize:18,fontWeight:'600'}}>{post.food}</Text>
                </View>
                <View style={styles.disandprice}>
                <Image
                source={require('../icon/pin.png')}
                style={{width:26,height:26}}
                />
                <Text style={{color:'#fff'}}>{post.distance}</Text>
                <Image
                source={require('../icon/tag-black-shape.png')}
                style={{width:26,height:26}}
                />
                <Text style={{color:'#fff'}}>{post.price}</Text>
                </View>
            </View>
            </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        height:38
    },
    cardview:{
        marginTop:17,
        width:312,
        height:184,
        borderRadius:10,
        shadowColor:"#c8c8",
        elevation:4,
        shadowOffset:{width:3,height:2},
        shadowOpacity:0.8
    },
    userphoto:{
        width:36,
        height:36,
        borderRadius:22,
        marginLeft:16,
        bottom:14
    },
    fooddetailname:{
        flexDirection:"column",
        marginLeft:5,
        bottom:12,
        width:108
    },
    disandprice:{
        alignItems:'flex-end',
        flex:1,
        flexDirection: "row",
        height:28,
        bottom:2

        
    }
});

export default foodcard;