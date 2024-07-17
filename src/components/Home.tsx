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
import {useSelector} from 'react-redux';
import {selectChats, selectCurrentChatId} from '../redux/reducers/ChatSlice';

const {height} = Dimensions.get('window');
const homeBackground = require('../assets/w_bg.png');

const Home = () => {
  const chats = useSelector(selectChats);
  const currentChatId = useSelector(selectCurrentChatId);
  console.log('chats', chats);
  console.log('currentChatId', currentChatId);
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
