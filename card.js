import React from 'react';
import { View, StyleSheet } from 'react-native';
import Visacard from './Visacard';

const Card = () => {
  
  return (
    <View style={styles.container}>
      <Visacard
        number="**** **** **** 1234"
        name="John Doe"
        expiry="06/25"
        type="Visa"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default Card;