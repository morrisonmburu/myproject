import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SettingsScreen () {
    return (
        <View style={styles.style1}>
            <Text>Settings!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    style1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})