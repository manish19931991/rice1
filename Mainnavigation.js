import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Vicky from './Vicky';
import Screen from './Screen';
import Map from './map';
import Visacard from './Visacard';
import Card from './card'; 
import Video from './Video'; 
import Swiper1 from './Swiper';
import pagination from './pagination';
import Description from './Description';
import Newnpm from './newnpm';
const Stack = createNativeStackNavigator();
const Mainnavigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       {/* <Stack.Screen name="Vicky" component={Vicky} 
      options={{  headerTitleAlign: 'center'}}
      />  */}
         {/* <Stack.Screen name="Screen" component={Screen} 
      options={{  headerTitleAlign: 'center'}}
      />  */}
       <Stack.Screen name="Map" component={Map} 
      options={{  headerTitleAlign: 'center'}}
      /> 
         {/* <Stack.Screen name="Card" component={Card} 
      options={{  headerTitleAlign: 'center'}}
      />  */}
        {/* <Stack.Screen name="Visacard" component={Visacard} 
      options={{  headerTitleAlign: 'center'}}
      />   */}
        {/* <Stack.Screen name="Video" component={Video} 
      options={{  headerShown:false}}
      /> */}
        {/* <Stack.Screen name="Swiper1" component={Swiper1} 
      options={{  headerShown:false}}
      />  */}
        {/* <Stack.Screen name="pagination" component={pagination} 
      options={{  headerShown:false}}
      /> 
      <Stack.Screen name="Description" component={Description} 
      options={{  headerShown:false}}
      />  */}
       {/* <Stack.Screen name="Newnpm" component={Newnpm} 
      options={{  headerShown:false}}
      />  */}
     
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Mainnavigation