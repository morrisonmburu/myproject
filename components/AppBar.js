import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Avatar, Badge, Icon } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
// import {  } from 'react-native-vector-icons/Icon'

const MyAvatar = () => {
    return (
        <View>
            <Avatar
                rounded
                size="small"
                title="MM"
                overlayContainerStyle={{
                    backgroundColor: 'grey'
                }}
            />

            <Badge
                status="success"
                containerStyle={{
                    position: 'absolute',
                    top: 24,
                    right: -2
                }}
            />
        </View>
    );
}

const Right = () => {
    return (
        <View style={styles.right}>
            <Icon 
                name="search"
                color="#fff"
                style={styles.icon}
                onPress={() => {console.log('clicked')}}
            />

            <Feather
                name="more-vertical"  
                color="#fff" 
                size={25}
                style={styles.icon2}
            />
        </View>
    )
}

export default function AppBar () {
    return (
        <Header
            leftComponent={<MyAvatar/>}
            centerComponent={{ text: 'Awsome React Native', style: { color: '#ffffff' } }}
            rightComponent={<Right/>}
            containerStyle={styles.header}
        ></Header>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1ABC9C',
        paddingTop: 0
    },
    icon: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: "flex-start"
    },
    icon2: {
        flex: 1,
        position: 'absolute',
        alignSelf: "flex-end"
    },
    right: {
        width: 70
    }
})