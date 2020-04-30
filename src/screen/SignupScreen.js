import React from "react";
import {View, Text, TouchableOpacity,StyleSheet,Image,TextInput} from "react-native"
import {Button} from "react-native-elements";

const SignupScreen = ({navigation}) =>{

    return (
        <View style={{backgroundColor:'#fff',height:812}}>
            <View style={styles.headertext}>
            <Text style={{fontSize:28,color:"#675D5D",}}>註冊</Text>
            </View>

            <View style={{paddingTop:53}}>
            <View style={styles.nameinputsection}>
                    <Image
                    source={require('../icon/round-account-button-with-user-inside.png')}
                    style={{height:18,width:18,marginTop:13,marginLeft:18}}
                    />
                <TextInput
                placeholder="輸入姓名"
                style={{marginLeft:18,color:"#F0A202"}}
                />
                </View>
                <View style={styles.emailinputsection}>
                    <Image
                    source={require('../icon/multimedia.png')}
                    style={{height:18,width:18,marginTop:13,marginLeft:18}}
                    />
                <TextInput
                placeholder="輸入信箱"
                style={{marginLeft:18,color:"#F0A202"}}
                />
                </View>
                <View style={styles.passwordinputsection}>
                    <Image
                    source={require('../icon/lock.png')}
                    style={{height:18,width:18,marginTop:13,marginLeft:18}}
                    />
                <TextInput
                placeholder="輸入密碼"
                style={{marginLeft:18,color:"#F0A202"}}
                />
                </View>
            </View>
            <View style={styles.btnstyle}>
                <Button
                buttonStyle={{
                    backgroundColor:"#F0A202",
                    borderRadius:22
                }}
                
                title="註冊"
                onPress={() => navigation.navigate('Home')} 
                style={{borderRadius:22}}
                />
            </View>
            <View style={{marginTop:36 ,alignItems:'center',height:20}}>
                <Text style={{color:"#675D5D"}}>其他註冊</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
                <TouchableOpacity >
                    <View style={styles.anothersignin_btn}>
                    <Image
                    source={require('../icon/brands-and-logotypes.png')}
                    style={{height:20,width:20}}
                    />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.anothersignin_btn2}>
                    <Image
                    source={require('../icon/facebook.png')}
                    style={{height:20,width:20}}
                    />
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    anothersignin_btn:{
        width:56,
        height:56,
        
        borderRadius:28,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#c8c8c8',
        shadowOffset:{width:1,height:-2},
        shadowOpacity:0.5,
        elevation:2
    },
    anothersignin_btn2:{
        width:56,
        height:56,
        marginLeft:50,
        borderRadius:28,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#c8c8c8',
        shadowOffset:{width:1,height:-2},
        shadowOpacity:0.5,
        elevation:2
    },
    headertext:{
        marginTop:108,
        width:328,
        marginLeft:36
        

    },
    nameinputsection:{
        flexDirection:'row',
        borderWidth:1,
        width:303,
        height:44,
        borderRadius:22,
        borderColor:'#c8c8c8',
        marginLeft:28
    },
    emailinputsection:{
        flexDirection:'row',
        borderWidth:1,
        width:303,
        height:44,
        borderRadius:22,
        borderColor:'#c8c8c8',
        marginLeft:28,
        marginTop:36
    },
    passwordinputsection:{
        marginTop:36,
        flexDirection:'row',
        borderWidth:1,
        width:303,
        height:44,
        borderRadius:22,
        borderColor:'#c8c8c8',
        marginLeft:28
    },
    btnstyle:{
        width:303,
        height:44,
        marginLeft:28,
        marginTop:50
    },
    signupsection:{
        marginTop:36,
        height:79,
        flexDirection:'row',
        justifyContent:'center'
    }
})


export default SignupScreen;