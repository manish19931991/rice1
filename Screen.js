import { View, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import AppHeader from './Header'
import { useEffect } from 'react'
const data = [
    { id: 1, Time: "$10.99", k: "1", r: "true" },
    { id: 2, Time: "$20", k: "1", r: "false" },
    { id: 3, Time: "$20", k: "1", r: "false" },

]

const Screen = (props) => {
    const [count, setCount] = useState(1)
    const mine = () => {
        if (count === 1) {
            setCount(1)
        }
        else {
            setCount(count - 1)
        }
    }
    useEffect(() => {
        AppHeader({
            ...props,
            leftIcon: true,
            leftImage: require('../google/logo_2.png'),
            // leftClick: (() => { props.navigation.openDrawer() }),
            Title: 'Cart',
            notificationIcon: true,
            // notification: require('../google/bell.png'),
            backgroundColor: "#2D2D2D"
        })
    })
    return (
        <View style={{ flex: 1, backgroundColor: "#2D2D2D" }}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index}>
                            <View style={{ height: 120, marginHorizontal: 20, top: 15, }}>
                                <Image style={{ width: "25%", height: 90, position: "absolute", borderRadius: 10 }}
                                    source={require("../google/img_3.png")} />
                                <View
                                    style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <Text style={{ color: "white", right: 20, fontSize: 16, left: 50 }}>
                                        Product Name
                                    </Text>
                                    <TouchableOpacity>
                                        <Image style={{ width: 30, height: 30, borderRadius: 10, left: 60 }}
                                            source={require("../google/delete.png")} />
                                    </TouchableOpacity>

                                </View>
                                <View style={{ flexDirection: "row", marginTop: 10, alignSelf: "center" }}>
                                    <Text style={{
                                        color: "white", fontSize: 21, right: 40, position: "absolute",
                                        right: item.r === "false" ? 40 : 10
                                    }}>
                                        {item.Time}
                                    </Text>
                                </View>
                                <View style={{ justifyContent: "space-evenly", marginTop: 10 }}>
                                    <TouchableOpacity onPress={() => mine()}>
                                        <Image style={{ width: 30, height: 30, position: "absolute", borderRadius: 10, right: 70 }}
                                            source={require("../google/less_btn.png")} />
                                    </TouchableOpacity>

                                    <Text style={{ color: "white", fontSize: 16, right: 40, position: "absolute" }}>
                                        {count}
                                    </Text>
                                    <TouchableOpacity onPress={() => setCount(count + 1)}>
                                        <Image style={{ width: 30, height: 30, position: "absolute", borderRadius: 10, right: 0 }}
                                            source={require("../google/add_btn.png")} />
                                    </TouchableOpacity>

                                </View>

                            </View>
                            <View style={{ borderWidth: 1, borderColor: "#707070", width: "90%", marginHorizontal: 20 }}></View>
                        </View>
                    )

                }} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
                <Text style={{ color: "white", fontSize: 14, left: 10 }}>
                    Item Name
                </Text>
                <Text style={{ color: "white", fontSize: 14, right: 10 }}>
                    $90.00
                </Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 29
            }}>
                <Text style={{ color: "white", fontSize: 14, left: 10 }}>
                    Service Fees
                </Text>
                <Text style={{ color: "white", fontSize: 14, right: 10 }}>
                    $2.00
                </Text>

            </View>
            <View style={{
                borderWidth: 1,
                borderColor: "#707070",
                width: "90%",
                marginHorizontal: 20
                , marginTop: 10
            }}>

            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 29
            }}>
                <Text style={{ color: "white", fontSize: 14, left: 10 }}>
                    Total
                </Text>
                <Text style={{ color: "white", fontSize: 14, right: 10 }}>
                    $92.00
                </Text>

            </View>
            <TouchableOpacity style={{ marginTop: 51,
                backgroundColor:"#3C3C3C",
                height:80,
                width:"90%",
                alignSelf:"center",borderRadius:10,borderWidth:2,
                borderColor:"white",marginBottom:90
               }}>
                <Text style={{ color: "white", textAlign: "center",top:30 }}>CHECKOUT</Text>
            </TouchableOpacity>



        </View>
    )
}

export default Screen