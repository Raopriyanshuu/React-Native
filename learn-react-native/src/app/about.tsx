import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to About Page!!</Text>
    </View>
  )
}

export default about


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow"

    },

    text: {
        padding: 10,
        backgroundColor: "blue",
        color: "white",

    }

    
})