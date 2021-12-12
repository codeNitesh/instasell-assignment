import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({post, deleteItem, templates})=>{
  return (
      <>
            <View style={styles.header}>
                <Text style={styles.tempName} >{templates.filter((t)=> t.id == post.templateId)[0].name}</Text>
                <Icon
                name="remove"
                size={20}
                color="firebrick"
                onPress={() => deleteItem(post.id)}/>
            </View>
            
          
            <View style={styles.listItem}>
                <Image style={styles.img} source={templates.filter((t)=> t.id == post.templateId)[0].url} style={{ width: 300, height: 300 }}></Image>
                <Text style={styles.text} >{post.offer}</Text>
                <Text style={styles.heading} >{post.heading}</Text>
            </View> 
      </>
        
  )
}

const styles = StyleSheet.create({
    header: {

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 370,
        alignItems: 'center'
    },
    tempName:{
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
    },
    listItem:{
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 30,
        position: 'relative'
    },
    heading:{
        color: 'magenta',
        position: 'absolute',
        top: 170,
        margin: 'auto',
        fontSize: 25,
    },
    text:{
        color: 'darkblue',
        position: 'absolute',
        top: 150,
        margin: 'auto',
        fontSize: 20,
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText:{
        fontSize: 18
    }
});

export default ListItem;