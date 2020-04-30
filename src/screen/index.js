import React from "react";
import {View, Text,Image} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SigninScreen from "./SigninScreen";
import SignupScreen from "./SignupScreen";
import HomeTabNavigation from "../navigations/MainTab.js";
import HomeScreen from "../screen/HomeScreen.js";
import SearchScreen from "../screen/SearchScreen.js";
import PostScreen from "../screen/PostScreen";
import FinishorderScreen from "./FinishorderScreen";
import UnfinishorderScreen from "./UnfinishScreen";
import FooddetailScreen from "./FooddetailScreen";



export const TopTab = createMaterialTopTabNavigator();

export const Stack = createStackNavigator();
export const Tab = createBottomTabNavigator();

//登入頁面

const BackImage =()=>{
    return(
    <Image
        source={require('../icon/back.png')}
        style={{width:24,height:24}}
        
    />
    )
}
export const SignStackNavigation = ({navigation}) => {

    return(
        <Stack.Navigator>
            <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown: false}} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeTabNavigation} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export const HomeStackNavigation = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component = {HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Food" component = {FooddetailScreen}  options={{
                headerStyle:{
                    backgroundColor:"#F0A202F0",
                    height:88
                },
                title:'吐司',
                headerTitleStyle:{
                    marginLeft:105
                },
                headerBackImage:()=> (<BackImage/>)
            }}/>
        </Stack.Navigator>
    )
}


export const PostStackNavigation = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Post" component = {PostScreen}/>
        </Stack.Navigator>
    )
}

export const OrderStackNavigation = ({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Order" component = {OrderTabNavigation} options={{
                title:'我的訂單',
                headerStyle:{
                    backgroundColor:"#F0A202F0",
                    height:88,
                    
                },
                headerTitleStyle:{
                    marginLeft:139,  
                },
            }}/>
        </Stack.Navigator>
    )
}

export const OrderTabNavigation = ({navigation}) => {
    return (
        <TopTab.Navigator
            tabBarOptions={{
                indicatorStyle:{
                    backgroundColor:'#F0A202F0'
                }
            }}
        >
            <TopTab.Screen name="unfinishorder" component={UnfinishorderScreen} 
            options={{
                title:'尚未領取',
            }} />
            <TopTab.Screen name="finishorder" component={FinishorderScreen}
            options={{
                title:'已領取'
            }}/>
        </TopTab.Navigator>
    )
}

//主頁面
