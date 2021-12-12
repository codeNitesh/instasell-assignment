import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const Footer = ()=>{
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    footer:{
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text:{
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
  }
});

export default Footer;