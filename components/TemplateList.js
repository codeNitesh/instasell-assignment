import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TemplateList = ({navigation, template})=>{

  return (
    <View style={styles.box}>
        <Image style={styles.img} source={template.url}></Image>
      <Text style={styles.title}>{template.name}</Text>
      <Button onPress={()=> navigation.navigate('CreateNewPost', {templateId: template.id})} title="Create Post"/>

    </View>
  )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#ccc'
    },
    img:{
        width: 350,
        height: 300
    },
    title:{
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default TemplateList;