import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function VendorScreen () {
    return (
        <View style={styles.style1}>
            <Text>Vendor Location!</Text>
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