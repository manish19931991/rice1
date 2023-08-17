import { View, Text,Image, StyleSheet, FlatList, } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
const Description = (props) => {
  // console.log(props.route.params.data.brand);
 
  let manish = props.route.params.data.images
    console.log("manish",manish);
    // const [images , Setimages] = useState([manish])
//////////////////////////////////////////////////////
    //  const route = useRoute();
    //  console.log(route.params.data.brand);
    //  console.log(route);
///////////////////////////////////////////////////////////
const renderItem = ({item}) => {
  console.log(item)
  return(
    <View style={{marginTop:30,flex:1,marginHorizontal:30}}>
      <Image style={{width:70,height:70,marginTop:10,borderRadius:8}} source={{uri : item}}/>
     </View>
  )
}
  return (
    <View style={styles.container}>
      <View style={styles.Image_view}>
      <Image style={styles.Image} 
      resizeMode={"contain"} 
      source={{uri: props.route.params.data.thumbnail}}/>
     </View>
     <Text style={styles.txt}>
     {props.route.params.data.description}
     </Text>
  
     {/* {manish?.map((item,index) => {
      return(
      <View style={{height:50,marginTop:20,flex:1}} key={index}>
        <ScrollView
        >
        <Image  style={{width:"70%",height:70,justifyContent:"space-between"}} 
        resizeMode={"contain"} source={{uri: item}}/>
        </ScrollView>
      
       
      </View>
      )
    })} */}
    <FlatList
    data={manish}
    horizontal
    renderItem={renderItem}/>
    </View>
  )
}

export default Description
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  Image_view:{
   marginTop:20,
   marginHorizontal:16
  },
  Image:{
    height:350,
    width:"100%",
    borderRadius:8
  },
  txt:{
    marginHorizontal:18,
    marginTop:20,
    color:"red"
  }
})