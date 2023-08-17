import { View, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import AppHeader from './Header'
import { useEffect } from 'react'
const data = [
    { id: 1, Time: "1d" },
    { id: 2, Time: "1d" },
    { id: 3, Time: "yesterday" },
    { id: 4, Time: "4d" },
    { id: 5, Time: "4d" },
    { id: 6, Time: "4d" },
    { id: 7, Time: "4d" },
    { id: 8, Time: "4d" },
    { id: 9, Time: "4d" },
]
const Vicky = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [pay, setpay] = useState(false);

    //     const showmodel = () => {
    //         setModalVisible(true);
    // }
    // const closemodel = () => {
    //     setModalVisible(!modalVisible)
    // }
    useEffect(() => {
        AppHeader({
            ...props,
            leftIcon: true,
            leftImage: require('../google/round_back.png'),
            // leftClick: (() => { props.navigation.openDrawer() }),
            Title: 'Notifications',
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
                        <View key={item} style={{}}>
                            <TouchableOpacity style={{ height: 90, marginHorizontal: 20, top: 15 }}>
                                <Image style={{ width: 50, height: 50, position: "absolute" }}
                                    source={require("../google/profile_img.png")} />

                                <Text style={{ color: "white", fontSize: 14, left: 70, top: 5 }}>Amanda Davis</Text>

                                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                    <Text style={{ color: "white", fontSize: 14, left: 70, top: 10 }}>
                                        #2314321
                                    </Text>
                                    <Text style={{ color: "white", fontSize: 14, right: 10, top: 10 }}>
                                        {item.Time}
                                    </Text>
                                </View>

                            </TouchableOpacity>
                            <View style={{ borderWidth: 1, borderColor: "#707070", width: "90%", marginHorizontal: 20 }}></View>

                        </View>
                    )
                }} />
            <View style={{ flexDirection: "row", marginHorizontal: 30, justifyContent: "space-around" }}>
                <TouchableOpacity style={{
                    height: 40, width: "25%",
                    backgroundColor: "blue", borderRadius: 10,
                }} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={{ textAlign: "center", color: "white", top: 5 }}>Open</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 40, width: "25%",
                    backgroundColor: "blue", borderRadius: 10
                }} onPress={() => closemodel()}>
                    <Text style={{ textAlign: "center", color: "white", top: 5 }}>Close</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={{
                        marginTop: 230,
                        backgroundColor: '#949494',
                        height: 270,
                        borderRadius: 30,
                        marginHorizontal: 35,
                        elevation: 20,
                        justifyContent: "center", alignItems: "center",
                    }}>
                        <View style={{ marginHorizontal: 50, }}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>Do you want to Delete</Text>
                            <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>Your Account?</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <TouchableOpacity onPress={() =>setpay("rose")}
                            style={{ width: "40%", height: 50, borderWidth: 2, borderColor: "white",
                     backgroundColor: pay === "rose"  ? "#000000" : "#949494",borderRadius:10
                    }}>
                                <Text style={{ color: "white", textAlign: "center", top: 10 }}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setpay("rice"),
                            setModalVisible(!modalVisible)}}
                            style={{ width: "40%", height: 50, borderWidth: 2, borderColor: "white", left: 10,
                             backgroundColor: pay == "rice" ? "#000000" : "#949494",borderRadius:10 }}>
                                <Text style={{ color: "white", textAlign: "center", top: 10 }}>OK</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default Vicky
