import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/clouds.png')} 
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome To</Text>
          <Text style={styles.brandName}>Shh!</Text>
          <Text style={styles.tagline}>A Hub Where Whispers Echo Loudest</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C5CB3',  
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    width: 264,
    height: 41,
    },
  brandName: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    width: 264,
    height: 41,

  },
  tagline: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginTop: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  loginLink: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
