import React from 'react'
import { Text, View, Settings, StyleSheet } from 'react-native'
import { BaseNavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import ShopScreen from './pageComponents/ShopScreen.js'
import VendorScreen from './pageComponents/VendorScreen.js'
import HistoryScreen from './pageComponents/HistoryScreen.js'
import SettingsScreen from './pageComponents/SettingsScreen.js'

const Tab = createBottomTabNavigator()

export default function BottomTabView () {
    return (
        <BaseNavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Shop') {
                            iconName = focused ? 'ios-cart' : 'md-cart';
                        } else if (route.name === 'Vendor Location') {
                            iconName = focused ? 'ios-locate' : 'md-locate'
                        } else if (route.name === 'Order History') {
                            iconName = focused ? 'ios-compass' : 'md-compass'
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-cog' : 'md-cog'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
                tabBarOptions={{
                    activeTintColor: '#1ABC9C',
                    inactiveTintColor: 'grey'
                }}
            >
                <Tab.Screen name="Shop" component={ShopScreen} />
                <Tab.Screen name="Vendor Location" component={VendorScreen} />
                <Tab.Screen name="Order History" component={HistoryScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </BaseNavigationContainer>
    )
}

const styles = StyleSheet.create({
    style1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
