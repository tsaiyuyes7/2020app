import React from "react";
import {View, Text, FlatList, Button, TextInput ,TouchableOpacity,Image,ScrollView,StyleSheet,ImageBackground} from "react-native"
import Shopdetail from "../json/Shopdetail.json"
import Fooddata from "../json/fooddetail.json"
import Foodcard from "../component/foodcard.js"

const ShopCard = (props) => {
    return(
        <ScrollView>
            <View style={styles.Scrollcard}>
                <Image
                    style={styles.shopimage}
                    source={{uri:props.image}}
                />
            </View>
        </ScrollView>
    )
}

const HomeScreen = ({navigation}) =>{

    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView scrollEventThrottle = {16} style={{height:450}}>
            <View style={{flexDirection:'row'}}>
               <View style = {styles.Searchsection}>
                <Image
                source={require('../icon/search.png')}
                style={{width:12,height:12,marginTop:12,marginLeft:12,marginRight:12}}
                />
               <TextInput
               placeholder="找食物"
               placeholderTextColor ="#9A9A9A"
               />
                </View>
            </View>
            
                <View style={styles.RowScrollsection}>
                    <Text style={styles.ScrollText}>精選商家</Text>
                    <View >
                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.scrollsection}
                    >
                    
                        <View style={styles.Scrollcard}>
                            <ImageBackground
                                imageStyle={{borderRadius:10}}
                                style={styles.shopimage}
                                source={{uri:Shopdetail[0].image}}
                            />
                            <Text style={styles.shopname}>{Shopdetail[0].name}</Text>
                        </View>
                        <View style={styles.Scrollcard}>
                            <ImageBackground
                                imageStyle={{borderRadius:10}}
                                style={styles.shopimage}
                                source={{uri:Shopdetail[1].image}}
                            />
                            <Text style={styles.shopname}>{Shopdetail[1].name}</Text>
                        </View>
                        <View style={styles.Scrollcard}>
                            <ImageBackground
                                imageStyle={{borderRadius:10}}
                                style={styles.shopimage}
                                source={{uri:Shopdetail[2].image}}
                            />
                            <Text style={styles.shopname}>{Shopdetail[2].name}</Text>
                        </View>
                    </ScrollView>       
                </View>
                    </View>
                    <Text style={styles.FlatListtext}>離你最近</Text>
                <FlatList
                data = {Fooddata}
                renderItem = {({item})=>
                <Foodcard
                post = {item}
                navigation = {navigation}
                />}
                keyExtractor = {item => item.name}
                contentContainerStyle={{overflow: 'hidden'}}
                />
            </ScrollView>
            
            
            
        </View>
    )
};

const styles = StyleSheet.create({
    Searchsection:{
        flex:1,
        fontWeight:"700",
        backgroundColor:'#7676801F',
        marginTop:52,
        width:1,
        height:36,
        marginLeft:26,
        marginRight:26,
        flexDirection:'row',
        borderRadius:10
    },
    Searchinput:{},
    RowScrollsection:{
        flex:1,
        paddingTop:10
    },
    FlatListtext:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:26
    },
    ScrollText:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:26,
        marginTop:16
    },
    Scrollcard:{
        height:180,
        width:278,
        marginRight:16,
        shadowColor:"#000",
        elevation:24,
        shadowOffset:{width:10,height:10},
        shadowOpacity:0.9

        
    },
    shopimage:{
        flex:1,
        width:278,
        height:null,
        resizeMode:'cover',
        borderRadius:10
        
    },
    shopname:{
        bottom:30,
        color:'white',
        fontWeight:'700',
        marginLeft:16

    },
    scrollsection:{
        marginTop:20,
        paddingLeft:26,
        
    }

})

export default HomeScreen;