import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import CustomHeader from './CustomHeader';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Getting screen dimensions
const {height} = Dimensions.get('window');

// Importing the image
const homeBackground = require('../assets/w_bg.png');

const Home = () => {
  return (
    <ImageBackground
      source={homeBackground}
      style={styles.backgroundImage}
      resizeMode="cover">
        <CustomHeader />
      </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: height,
  },
});
