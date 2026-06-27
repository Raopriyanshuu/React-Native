import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logo</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },

    text: {
        fontWeight: "bold",
        color: "red",
        fontSize: 40,

    }
})