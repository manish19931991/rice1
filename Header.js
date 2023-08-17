import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { changeTheme } from '../redux/Action';
// import Colors from '../theme/colors';
// import fonts from '../theme/fonts';
// import {normalize} from '../components/normalize


const AppHeader = (props,route) => {
   
    return props.navigation.setOptions({
        
        headerLeft: () => (
            <View style={styles.header_view}>
                {props.leftIcon ? (
                    <>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            hitSlop={styles.hit_style}
                            onPress={() => props.leftClick()}>
                            <Image
                                resizeMode={'contain'}
                                source={props.leftImage}
                                style={{
                                    height: props.heightLeftImg ? props.heightLeftImg : 24,
                                    width: props.widthLeftImg ? props.widthLeftImg : 25,
                                    alignSelf: 'center',
                                    marginTop: props.marginTop
                                }}
                            />
                        </TouchableOpacity>
                    </>
                ) : null}
            </View>
        ),

        headerTitle: () => (
            <View style={styles.title}>
                {props.Title ? (
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: props.titleSize ? props.titleSize : 23,
                            fontFamily: 'bold',
                            color: props.titleColor ? props.titleColor : "#fff",
                            
                        }}>
                        {props.Title}
                    </Text>
                ) : null}
            </View>
        ),

        headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {props.notificationIcon ? (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => props.notificationClick()}
                        style={styles.head_rightTwo}>
                        <Image
                            resizeMode={'contain'}
                            source={props.notification}
                            style={{
                                height: props.heightRightImg ? props.heightRightImg : 23,
                                width: props.widthRightImg ? props.widthRightImg : 23,
                            }}
                        />
                    </TouchableOpacity>
                ) : null}
                {props.skip ? (
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => props.skipClick()}
                        style={styles.skip_right}>

                        <Text style={styles.skip_text}>Skip</Text>
                    </TouchableOpacity>
                ) : null}

            </View>
        ),

        headerStyle: {
            height: Platform.OS == 'ios' ? 90 : 60,

            elevation: 0,
            // backgroundColor: route.params.paramKey,
            backgroundColor: props.backgroundColor,
            // backgrounColor : backgrounColor,
            shadowOpacity: 0,
        },
    });
};

export default AppHeader;

const styles = StyleSheet.create({
    header_view: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    hit_style: { top: 20, left: 20, right: 20, bottom: 20 },
    title: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
 

    },
    head_rightOne: {
        marginRight: 10,
    },
    head_rightTwo: {
        marginRight: 24,
    },
    userName: {
        // color: Colors.primary.WHITE,
        fontSize: 16,
        // fontFamily: fonts.Montserrat_SemiBold,
        marginLeft: 15,
    },
    skip_text: {
        // fontFamily: fonts.Roboto_Bold,
        fontSize: 14,
        // color: Colors.secondary.CLEAR_BLUE,
    },
    skip_right: {
        marginRight: 26,
    },
});