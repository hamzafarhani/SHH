import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>Log in to Shh!</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png' }} style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Log in with Google</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or log in with Email</Text>


      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        </View>
        <View style={styles.passwordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.SignupText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      <Image source={require('../assets/a.png')} style={styles.illustration} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8C5CB3', 
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 50,
    },
    googleButton: {
      flexDirection: 'row',
      backgroundColor: 'black',
      padding: 15,
      borderRadius: 30,
      alignItems: 'center',
      marginBottom: 20,
    },
    googleIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    googleButtonText: {
      color: 'white',
      fontSize: 16,
    },
    orText: {
      color: 'black',
      marginVertical: 20,
    },
    input: {
      backgroundColor: 'white',
      width: '100%',
      padding: 15,
      borderRadius: 25,
      marginBottom: 20,
      color: 'black',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    forgotText: {
      color: 'black',
      alignSelf: 'flex-end',  
      marginRight: 10,  
    },
    SignupText: {
      color: 'black',
      marginTop: 20,
      marginBottom: 60,
    },
    illustration: {
      flex : 1,
      position: 'absolute',
      justifyContent: 'flex-start',
      alignItems: 'center',
      resizeMode: "contain",
    },
  });
  export default LoginScreen;  