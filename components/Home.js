import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const Home = ({ navigation })=>{

  return (
    <View style={styles.viewStyle}>
        <Text style={styles.text1}>Hey 👋</Text>
        <Text style={styles.text1}>Welcome to the App!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TemplateListScreen')} style={styles.btn1}><Text style={styles.btnText}>Choose from Templates</Text><Icon name="arrow-right" size={25} color="#fff"></Icon></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={[styles.btn1, styles.btn2]}><Text style={styles.btnText}>Choose from Templates</Text><Icon name="arrow-right" size={25} color="#fff"></Icon></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btn1:{
        width: 350,
        height: 100,
        backgroundColor: '#2D5FC5',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 20
    },
    btn2:{
        backgroundColor: '#AB8CC5'
    },
    btnText:{
        color: '#fff',
        fontSize: 20,
    },
    text1:{
        fontSize: 25,
        color: '#2C4251',
        margin: 5
    }
});

export default Home;