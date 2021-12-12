import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import ListItem from './ListItem'

const AllPost = ({ navigation, posts, deleteItem, templates })=>{
    return( posts.map(p=>{
        return <ListItem key={p.id} post={p} deleteItem={deleteItem} templates={templates}/>
        }
    ))
}

const styles = StyleSheet.create({
  
});

export default AllPost;