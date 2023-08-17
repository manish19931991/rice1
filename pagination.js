import { View, Text, FlatList, StyleSheet, Image, Alert, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { useNavigation } from '@react-navigation/native';
let limit = 10;
let moredata = true
const Pagination = (props) => {
    // const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [skip, setskip] = useState(0);
    const searchInputRef = useRef(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        fetchdata();
        // console.log("manish");
    }, [])
    const handleSearch = (query) => {

        const filteredData = data.filter((item) => {
            return item.brand.toLowerCase().includes(query.toLowerCase());
        });
        setSearchResults(filteredData);
    };
    const fetchdata = () => {
        let query = `?skip=${skip}&limit=${limit}`
        fetch('https://dummyjson.com/products' + query)
            .then(res => res.json())
            .then(res => {
                // console.log("api data", res)
                if (res.products.length == 0) {
                    moredata = false
                }
                setData([...data, ...res.products]);
                // setSearchResults([...data, ...res.products]);
                setskip(skip + 10)
            }).catch(error => {
                console.log("error like occour", error);
            });
    }
    const onEndReached = () => {
        if (moredata) {
            fetchdata()
        }
    }
    const renderItem = useCallback(({ item }) => {
        return (
            <TouchableOpacity style={styles.flatstyles} 
            onPress={() => props.navigation.navigate("Description", 
            // {data: item}
            {data: item}
            )}>
                <Image source={{ uri: item.thumbnail }} style={styles.imagestyles} />

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 8 }}>
                    <Text>
                        {item.brand}
                    </Text>
                    <Text>Rs. {item.price * 80}</Text>
                </View>
                <Text>{item.description}</Text>
            </TouchableOpacity>
        )
    }, [data])
    const keyExtractor = useCallback((item) => `${item.id.toString()}`)
    const ItemSeparatorComponent = useCallback(() => {
        return (
            <View style={{ height: 20 }}></View>
        )
    }, [data])
    const ListFooterComponent = useCallback(() => {
        return (
            <ActivityIndicator style={{ marginVertical: 10 }}  color="#0000ff" size={"large"} />
        )
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                marginTop: 20, marginHorizontal: 20,
                borderWidth: 1,
                borderColor: "red", borderRadius: 8
            }}>
                <TextInput
                    ref={searchInputRef}
                    style={{ color: "black", padding: 10, }}
                    placeholder={"Search"}
                    placeholderTextColor={"gray"}
                    value={searchQuery}
                    onChangeText={(text) => {
                        setSearchQuery(text);
                        handleSearch(text);
                    }}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={searchQuery == false ? data : searchResults}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    onEndReached={onEndReached}
                    ListFooterComponent={ListFooterComponent} />
            </View>
        </SafeAreaView>
    )
}

export default Pagination
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        marginHorizontal: 16
    },
    imagestyles: {
        width: "100%",
        height: 200,
        borderRadius: 8
    },
    flatstyles: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: "white",
        padding: 8,
        margin: 2,
        borderRadius: 8
    }
})