import React, { Component } from 'react';
import * as RNIap from 'react-native-iap';
import { View, Text, Platform, StyleSheet } from 'react-native';

// Now, we have 4 tiers ($1, $3, $5 and $10) for donations
const itemSkus = Platform.select({
  ios: [
    'point_1000',
  ],
  android: [
    'com.yihengquan.wowsinfo.support1',
    'com.yihengquan.wowsinfo.support3',
    'com.yihengquan.wowsinfo.support5',
    'com.yihengquan.wowsinfo.support10',
  ],
});

class Donation extends Component {
  render() {
    const { container } = styles;


    return (
      <View style={container}>
        <Text>Donation</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { Donation };
