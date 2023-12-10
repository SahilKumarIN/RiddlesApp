import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Main from './components/Main';


export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={isDarkMode ? styles.darkMode : styles.lightMode}>
      <View style={styles.header}>
        <Text style={[isDarkMode ? styles.darkModeText : styles.lightModeText, styles.textHeading]}>Riddles App</Text>
      </View>

      {/* Here are all my components */}
      <ScrollView 
        style={{height: '90%'}} >
          <Main />
      </ScrollView>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  darkModeText: {
    color: '#c5cae9'
  },
  lightModeText: {
    color: '#3949ab'
  },
  textHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  darkMode: {
    backgroundColor: "#1f2937",
    // color: '#c5cae9',
    minHeight: '100%'
  },
  lightMode: {
    backgroundColor: "#e8eaf6",
    // color: '#3949ab',
    minHeight: '100%'
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  }
})