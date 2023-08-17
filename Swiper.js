import { View, Text, StyleSheet, Image,ImageBackground } from 'react-native'
import React from 'react'
import Swiper from "react-native-swiper";
const Swiper1 = () => {
    return (
    <ImageBackground 
        source={require("../google/bg_img.png")}
        resizeMode="cover"
        style={styles.container}>
           <View style={{height:420}}>
           <Swiper style={styles.wrapperone}
                 autoplay={false}
                showsButtons={false}
                dot={<View style={styles.dot_view} />}
                activeDot={<View style={styles. active_view} />}
            >
                <View>
                    <Image style={styles.profile_img} resizeMode="contain"
                        source={require("../google/image_eight.png")} />
                </View>
                <View>
                    <Image style={styles.profile_img} resizeMode="contain"
                        source={require("../google/image_eight.png")} />
                </View>
                <View >
                    <Image style={styles.profile_img} resizeMode="contain"
                        source={require("../google/image_eight.png")} />
                </View>
            </Swiper>
           </View>
          </ImageBackground>
      )
};

export default Swiper1
const styles = StyleSheet.create({
    container: {
        flex: 1,

      },
      profile_img: {
        // flex:1,
        height: 300,
         width: 300, 
         alignSelf: 'center',
        borderRadius: 10,
      },
    
      dot_view: {
        backgroundColor: "green",
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: 5,
       
      },
      active_view: {
        backgroundColor: "yellow",
        width: 19,
        height: 10,
        borderRadius: 10,
        margin: 5,
     
      },
      wrapperone: {
          height: 400,
          marginTop:50,
        //   flex: 1,
          
        },
    //   line_view: {
    //     height: 1,
    //     backgroundColor: "black",
    //     flex: 1
    //   },
})
