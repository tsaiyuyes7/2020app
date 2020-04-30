import React from "react";
import {View, Text, TouchableOpacity,StyleSheet,TextInput,Image} from "react-native";
import SignupScreen from "../screen/SignupScreen";
import {Button} from "react-native-elements"

const SigninScreen = ({navigation}) =>{

    return (
        <View style={{backgroundColor:'#fff'}}>
            <View style={styles.headertext}>
            <Text style={{fontSize:28,color:"#675D5D",}}>登入</Text>
            </View>

            <View style={{paddingTop:53}}>
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
                <Text style={{color:"#F0A202",marginTop:6,marginLeft:268}}>忘記密碼?</Text>
            </View>
            <View style={styles.btnstyle}>
                <Button
                buttonStyle={{
                    backgroundColor:"#F0A202",
                    borderRadius:22
                }}
                
                title="登入"
                onPress={() => navigation.navigate('Home')} 
                style={{borderRadius:22}}
                />
            </View>
            <View style={{marginTop:36 ,alignItems:'center',height:20}}>
                <Text style={{color:"#675D5D"}}>其他登入</Text>
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
            <View style={styles.signupsection}>
                <Text style={{color:"#675D5D",fontSize:13}}>還沒擁有帳號?</Text>
                <Button 
                        buttonStyle={{
                            backgroundColor:"#fff",
                            height:17
                            
                        }}
                        titleStyle={{
                            color:'#F0A202',
                            fontSize:13
                        }}
                        title="註冊"
                        onPress={() => navigation.navigate('Signup')}
                    />
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
    emailinputsection:{
        flexDirection:'row',
        borderWidth:1,
        width:303,
        height:44,
        borderRadius:22,
        borderColor:'#c8c8c8',
        marginLeft:28
    },
    passwordinputsection:{
        marginTop:50,
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
        marginTop:82
    },
    signupsection:{
        marginTop:36,
        height:79,
        flexDirection:'row',
        justifyContent:'center'
    }
})

export default SigninScreen;