import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wrapper = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
         <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Text>Common content</Text>
            </View>
  )
}

export default Wrapper

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
})