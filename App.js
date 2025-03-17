import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Adicionar from './Adicionar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Stack = createNativeStackNavigator();

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('C:/AppReservadeLivro/Livraria/imagens/images.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Login - Multimeios</Text>
      <TextInput style={styles.input} placeholder="Usuário" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickLoginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.quickLoginButtonText}>Login Rápido</Text>
      </TouchableOpacity>
      <Text style={styles.copyright}>© 2025 E.E.E.P. Comendador Miguel Gurgel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  logo: {
    width: '80%',
    height: undefined,
    aspectRatio: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    color: '#2d3436',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '55%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#b2bec3',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  button: {
    backgroundColor: '#0984e3',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    width: '55%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickLoginButton: {
    backgroundColor: '#6c5ce7',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
    width: '55%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  quickLoginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyright: {
    marginTop: 20,
    fontSize: 12,
    color: '#b2bec3',
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Adicionar" component={Adicionar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
