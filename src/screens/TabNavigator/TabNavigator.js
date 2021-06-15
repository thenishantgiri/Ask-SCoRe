import React from 'react';
import { createAppContainer } from 'react-navigation';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import NotificationScreen from '../NotificationScreen/NotificationScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import ForumScreen from '../ForumScreen/ForumScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLOR_PRIMARY } from '../../config/styles';


const TabNavigator = createMaterialBottomTabNavigator(
    {
    Home : {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{color : tintColor}]} size={25} name={'ios-home'} />
                </View>
            ),
        }),
    },

    Notification : { 
        screen : NotificationScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{color : tintColor}]} size={25} name={'notifications'} />
                </View>
            ),
            
        }),
    },

    Forum : { 
        screen : ForumScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{color : tintColor}]} size={25} name={'chatbox'} />
                </View>
            ),
        }),
    },

    Profile : { 
        screen : ProfileScreen,
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{color : tintColor}]} size={25} name={'ios-person'} />
                </View>
            ),
        }),
    },
    },
    
    {
        initialRouteName: 'Home',
        activeColor: '#ffffff',
        inactiveColor: '#8cc971',
        barStyle: { backgroundColor: COLOR_PRIMARY },
    }
)

export default createAppContainer(TabNavigator);