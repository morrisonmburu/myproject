import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HistoryScreen () {
    return (
        <View style={styles.style1}>
            <Text>Order History!</Text>
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