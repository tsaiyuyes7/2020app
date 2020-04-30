import React from "react";
import {View, Text, FlatList,  TextInput ,TouchableOpacity,Image,ScrollView,StyleSheet,ImageBackground} from "react-native"
import {Button} from "react-native-elements";
import fooddata from "../json/fooddetail.json";
import { round } from "react-native-reanimated";

const FooddetailScreen = ({navigation}) =>{

    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
            <Image
                source={{uri:fooddata[0].img}}
                style={styles.Foodimg}
            />
            <View style={styles.SellerSection}>
                <Image
                    source={{uri:fooddata[0].userphoto}}
                    style={styles.Userphoto}
                />
                <View style={{marginLeft:8}}>
                    <Text style={{fontSize:12}}>{fooddata[0].name}</Text>
                    <Text style={{fontSize:22}}>{fooddata[0].food}</Text>
                    <Text style={{fontSize:12,marginTop:2}}>5小時前發布</Text>
                </View>
                <View style={styles.Disandprice}>
                    <Image
                        source={require('../icon/pin.png')}
                        style={{height:26,width:26,marginTop:-2}}
                    />
                    <Text>{fooddata[0].distance}</Text>
                    <Image
                        source={require('../icon/tag-black-shape.png')}
                        style={{height:26,width:26,marginTop:-2}}
                    />
                    <Text>{fooddata[0].price}</Text>
                </View>
            </View>
            <View style={styles.Twobutton}>
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Image
                        source={require('../icon/chat-bubble.png')}
                        style={{width:18,height:17}}
                        />
                        <Text style={{fontSize:12 ,marginLeft:14}}>聯絡{fooddata[0].name}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Image
                        source={require('../icon/order.png')}
                        style={{width:18,height:18}}
                        />
                        <Text style={{fontSize:12 ,marginLeft:14}}>我要下訂
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <View style={styles.FooddetailList}>
                    <Text style={{fontSize:12}}>說明</Text>
                    <Text style={{fontSize:12 ,marginLeft:32}}>2天前買的吐司、還有3、4片</Text>
                </View>
                <View style={styles.FooddetailList}>
                    <Text style={{fontSize:12}}>期限</Text>
                    <Text style={{fontSize:12 ,marginLeft:32}}>4天</Text>
                </View>
                <View style={styles.FooddetailList}>
                    <Text style={{fontSize:12}}>數量</Text>
                    <Text style={{fontSize:12 ,marginLeft:32}}>1</Text>
                </View>
                <View style={styles.FooddetailList}>
                    <Text style={{fontSize:12}}>地點</Text>
                    <Text style={{fontSize:12 ,marginLeft:32}}>台北市大安區和平東路360號</Text>
                </View>
            </View>
            <View style={{height:372,justifyContent:'center',alignItems:'center'}}>
                <Image
                source={require('../icon/3F34003E-AB34-489A-A220-9B6B27ED1B41.png')}
                style={{width:340,height:340}}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Foodimg:{
        width:343,
        height:316,
        borderRadius:22,
        marginLeft:16,
        marginTop:16
    },
    Userphoto:{
        width:64,
        height:64,
        borderRadius:35,
        marginLeft:16
    },
    FooddetailList:{
        height:42,
        width:375,
        backgroundColor:"#F5F5F5",
        paddingLeft:19,
        flexDirection:'row',
        alignItems:'center'  
    },
    SellerSection:{
        justifyContent:'flex-start',
        flexDirection:'row',
        height:64,
        alignItems:'center',
        marginTop:32
    },
    Disandprice:{
        justifyContent:'flex-start',
        flexDirection:'row',
        marginLeft:59
    },
    Twobutton:{
        flexDirection:'row'
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:163,
        height:42,
        marginLeft:16,
        backgroundColor:'#F0A202',
        borderRadius:10,
        marginTop:32,
        marginBottom:32
    }


})

export default FooddetailScreen;