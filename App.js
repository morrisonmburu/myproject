import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './components/AppBar.js';
import BottomTabView from './components/BottomTabView';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <BottomTabView></BottomTabView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'pink'
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});
