import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from './CustomHeader';


const {height} = Dimensions.get('window');
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
