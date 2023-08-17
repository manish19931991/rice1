import { View, Text, StyleSheet, Alert,Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native';

const Newnpm = () => {
    const [selected, Setselected] = useState(0);
    const progress1 = useRef(new Animated.Value(0)).current;
    const progress2 = useRef(new Animated.Value(0)).current;
    const progress3 = useRef(new Animated.Value(0)).current;
    const Start1 = () => {
        Animated.timing(progress1,{
            toValue:100,
            duration:3000,
            useNativeDriver:false
        }).start();
    };
    const Start2 = () => {
        Animated.timing(progress2,{
            toValue:100,
            duration:3000,
            useNativeDriver:false
        }).start();
    }
    const Start3 = () => {
        Animated.timing(progress3,{
            toValue:100,
            duration:3000,
            useNativeDriver:false
        }).start();
    }
    const previous = () => {
        if (selected >  0) {
            Setselected(selected == 0)
        } else {
            alert("Limit over")
        }
       
    }
    const next = () => {
        // if (selected < 4) {
        //     Setselected(selected + 1)
        // } else {
        //     alert("Limit over")
        // }
        if(selected  == 1){
            
            Start1()
        }
        if(selected  == 2){
            Start2() 
        }
        if(selected  == 3){
            Start3()
        }
        if(selected == 0){
            Setselected(selected + 1)
        }else{
            setTimeout(() => {
                Setselected(selected + 1)
            },3000)
        }
      
       
    }
    return (
        <View style={styles.container}>
            <View style={styles.indicator_start}>
                <View style={{
                    backgroundColor: selected > 0 ? "green" : "#8e8e8e",
                    borderRadius: 15,
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{ color: "#fff" }}>1</Text>
                </View>
                <View style={{
                    width: 6,
                    height: 100,
                    backgroundColor: "#8e8e8e",
                }}></View>
                <View style={{
                    backgroundColor: selected > 1 ? "green" : "#8e8e8e",
                    borderRadius: 15,
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{ color: "#fff" }}>2</Text>
                </View>
                <View style={{
                    width: 6,
                    height: 100,
                    backgroundColor: "#8e8e8e",
                }}></View>
                <View style={{
                    backgroundColor: selected > 2 ? "green" : "#8e8e8e",
                    borderRadius: 15,
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{ color: "#fff" }}>3</Text>


                </View>
                <View style={{
                    width: 6,
                    height: 100,
                    backgroundColor:  "#8e8e8e",
                }}></View>
                <View style={{
                    backgroundColor: selected > 3 ? "green" : "#8e8e8e",
                    borderRadius: 15,
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{ color: "#fff" }}>4</Text>
                </View>
            </View>
            <View style={styles.indicator_start1}>
                
                <Animated.View style={{
                    width: 6,
                    height: progress1,
                    marginTop:30,
                    backgroundColor:  "green" 
                }}></Animated.View>
               
                <Animated.View style={{
                    width: 6,
                    height: progress2,
                    marginTop:30,
                    backgroundColor:"green" ,
                }}></Animated.View>
              
                <Animated.View style={{
                    width: 6,
                    height: progress3,
                    marginTop:30,
                    backgroundColor: "green" ,
                }}></Animated.View>
               
            </View>
            <TouchableOpacity onPress={() => next()}
                style={styles.touch}
                activeOpacity={0.6}>
                <Text style={styles.touch_txt}>
                    NEXT
                </Text>
            </TouchableOpacity>
            {/* {selected < 4 ? (
            <TouchableOpacity onPress={() => next()}
                style={styles.touch}
                activeOpacity={0.6}>
                <Text style={styles.touch_txt}>
                    NEXT
                </Text>
            </TouchableOpacity>
            ) : (
            <View
                style={styles.touch1}
                activeOpacity={0.6}>
                <Text style={styles.touch_txt}>
                    NEXT
                </Text>
            </View>)}

            {selected > 0 ? (<TouchableOpacity onPress={() => previous()}
                style={styles.touch2}
                activeOpacity={0.6}>
                <Text style={styles.touch_txt}>
                    PREVIOUS
                </Text>
            </TouchableOpacity>) : (<View
                style={styles.touch3}
                activeOpacity={0.6}>
                <Text style={styles.touch_txt}>
                    PREVIOUS
                </Text>
            </View>)} */}


        </View >
    )
}

export default Newnpm
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    indicator_start: {
        width: "100%",
        alignItems: "center",
        padding: 50,

    },
    indicator_start1: {
        width: "100%",
        alignItems: "center",
        padding: 50,
        position:"absolute",
        top:0

    },
    touch: {
        marginTop: 10,
        width: 200, height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        alignSelf: "center",
        borderRadius: 8
    },
    touch1: {
        marginTop: 10,
        width: 200, height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8e8e8e",
        alignSelf: "center",
        borderRadius: 8
    },
    touch2: {
        marginTop: 30,
        width: 200, height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        alignSelf: "center",
        borderRadius: 8
    },
    touch3: {
        marginTop: 30,
        width: 200, height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8e8e8e",
        alignSelf: "center",
        borderRadius: 8
    },
    touch_txt: {
        color: "white"
    },
})