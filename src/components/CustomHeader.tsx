import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Bars3BottomLeftIcon,
  CheckBadgeIcon,
} from 'react-native-heroicons/solid';

const logoImage = require('../assets/logo_s.jpeg');

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <TouchableOpacity>
            <Bars3BottomLeftIcon color="white" size={38} />
          </TouchableOpacity>
          <View style={styles.flexRow}>
            <Image source={logoImage} style={styles.image} />
            <View>
              <Text style={styles.headingText}>
                Meta AI <CheckBadgeIcon color="#5bee73" size={18} />
              </Text>
              <Text style={styles.text}>with Llama 3</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.clearButton}>Clear</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(20,25,46,1)',
    height: 110,
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)',
  },
  subContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  headingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 300,
    opacity: 0.7,
  },
  clearButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
