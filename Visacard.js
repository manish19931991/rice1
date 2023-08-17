import React from 'react';
import { View, Text, Image, StyleSheet,SafeAreaView, TextInput,TouchableOpacity,Button } from 'react-native';

const Visacard = ({ number, name, expiry, type }) => {
  const cardLogo = type === 'Visa' ? require('../google/visa.png') : require('../google/mastercard.png');

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.payment_text}>Add Payment Info</Text>
    <TextInput placeholder={"Card Number"} marginTop={"38%"} />
    <View style={styles.cardDetails}>
      <TextInput
        placeholder="Expiry Date (mm/yy)"
        //   placeholderTextColor={Colors.secondary.LIGHT_NAVY}
        style={styles.date_input}
      />
      <TextInput
        placeholder="CVV"
        //   placeholderTextColor={Colors.secondary.LIGHT_NAVY}
        style={styles.cvv_input}
      />
    </View>
    <TextInput placeholder={"Zip Code"} marginTop={19} />

    <View style={styles.skip_View}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          props.navigation.navigate("BottomTab");
        }}
        style={styles.skip_button}
      >
        <Text style={styles.skip_text}>Skip for Now</Text>
      </TouchableOpacity>
      <Button
        title={"CONTINUE"}
        onPress={() => props.navigation.navigate("PaymentMethods")}
      />
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
      },
      payment_text: {
        color: "white",
        // fontFamily: fonts.Montserrat_SemiBold,
        fontSize: 24,
        textAlign: "center",
        marginTop: 73,
      },
      date_input: {
        borderRadius: 20,
        alignSelf: "center",
        alignItems: "center",
        height: 80,
        width: "47%",
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 14,
        marginVertical: 7,
    
        // fontFamily: fonts.Montserrat_Medium,
        flex: 1,
        fontSize: 12,
        color: "navy",
      },
      cvv_input: {
        borderRadius: 20,
        alignSelf: "center",
        alignItems: "center",
        height: 80,
        width: "47%",
        marginLeft: 17,
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 16,
        marginVertical: 7,
        flex: 1,
        fontSize: 17,
        color: "navy",
      },
      skip_button: {
        alignSelf: "center",
        bottom: 48,
      },
      skip_text: {
        // fontFamily: fonts.Montserrat_SemiBold,
        fontSize: 14,
        color:"white",
      },
      skip_View: {
        position: "absolute",
        bottom: 41,
        width: "100%",
      },
      cardDetails: {
        flexDirection: "row",
        marginHorizontal: 30,
        marginTop: 21,
      },
});

export default Visacard;