import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const CreatePost = ({template, addPost})=>{

    const [heading, setHeading] = useState('')
    const [offer, setOffer] = useState('')

    const onHeadingChange = (heading)=>{
        setHeading(heading)
    }

    const onOfferChange = (offer)=>{
        setOffer(offer)
    }


  return (
    <View style={styles.createPostView}>
        <View style={styles.listItem}>
            <Image style={styles.img} source={template.url}></Image>
            <Text style={styles.text} >{offer}</Text>
            <Text style={styles.heading} >{heading}</Text>
        </View>
        <TextInput placeholder='Add Heading (eg. Weekend Sale)' style={styles.input}
        onChangeText={onHeadingChange} />
        <TextInput placeholder='Add About Offer (eg. 30% off)' style={styles.input}
        onChangeText={onOfferChange} />
        <TouchableOpacity onPress={()=> addPost(template.id, heading, offer)} style={styles.btn}>
            <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
    createPostView:{
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input:{
        height: 60,
        padding: 10,
        width: 350,
        fontSize: 16,
        borderWidth: 1,
        marginTop: 20
    },
    btn: {

        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 20,
        width: 350,
    },
    img:{
        width: 350,
        height: 300
    },
    btnText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default CreatePost;