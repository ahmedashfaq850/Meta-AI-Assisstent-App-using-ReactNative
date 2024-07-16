import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomText = ({
    fontsize=18,
    fontWeight='bold'

}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: fontsize,
          fontWeight: fontWeight,
        }}
      >CustomText</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
