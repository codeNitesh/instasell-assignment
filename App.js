import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Alert, Button, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Header from './components/Header'
import { v4 as uuidv4 } from 'uuid'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import Footer from './components/Footer'
import TemplateList from './components/TemplateList'
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePost from './components/CreatePost'
import Home from './components/Home';
import AllPost from './components/AllPost';

const App=()=>{

  const Stack = createNativeStackNavigator();

  const [templates] = useState([
    {id: 1, name: 'Christmas Template', url: require('./components/img/t1.png')},
    {id: 2, name: 'Announcement Template', url: require('./components/img/t2.png')},
    {id: 3, name: 'Free Offer Template', url: require('./components/img/t3.png')},
    {id: 4, name: 'New Year Template', url: require('./components/img/t4.png')},
    {id: 5, name: 'General Template', url: require('./components/img/t5.png')},
  ])

  const [posts, setPosts] = useState([
    {id: uuidv4(), templateId: 1, heading: "Happy New Year", offer: "30% Off"},
    {id: uuidv4(), templateId: 2, heading: "Weekend Sale", offer: "50% Off"}
  ])

  const deleteItem = (id) => {
    setPosts(prevItems => {
      return prevItems.filter(post => post.id !== id);
    });
  };

  const addPost = (templateId, heading, offer)=>{
    alert("The post is saved successfully")
    setPosts(prevItems =>{
      return [{id: uuidv4(), templateId, heading, offer}, ...prevItems]
    }) 
  }
  
  const TemplateListScreen = ({navigation, templates})=>{
    return(
      <View style={styles.TemplateListScreen}>
         {templates.map((template)=>{
          return <TemplateList key={template.id} navigation={navigation} template={template}></TemplateList>
        })}
      </View>
    )
  }

  const CreateNewPost = ({route, navigation, templates})=>{
    const { templateId } = route.params;
    return <CreatePost template={templates.filter((t)=>t.id == templateId)[0]} addPost={addPost}></CreatePost>
  }

  const AllPostScreen = ({ navigation, posts, templates, deleteItem }) => {
    return <AllPost posts={posts} deleteItem={deleteItem} templates={templates}></AllPost>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details">
          {props => <ScrollView><AllPostScreen {...props} posts={posts} templates={templates} deleteItem={deleteItem} /></ScrollView>}
        </Stack.Screen>
        <Stack.Screen name="TemplateListScreen">
          {props => <ScrollView><TemplateListScreen {...props} templates={templates} /></ScrollView>}
        </Stack.Screen>
        <Stack.Screen name="CreateNewPost">
          {props => <ScrollView><CreateNewPost {...props} templates={templates} /></ScrollView>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

export default App