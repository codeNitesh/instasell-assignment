import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({addItem})=>{

    const [text, setText] = useState('')

    const onChange = (val)=>{
        setText(val)
    }

  return (
    <View>
        <TextInput placeholder='Add item...' style={styles.input}
        onChangeText={onChange} />
        <TouchableOpacity onPress={()=> addItem(text)} style={styles.btn}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20}/> Add
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        height: 60,
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        margin: 5
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default AddItem;