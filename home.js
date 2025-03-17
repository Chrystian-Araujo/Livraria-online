// Home.js
import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.search} placeholder="Pesquisar na biblioteca" />
      </View>
      <View style={styles.navbar}>
        <Button title="Inicio" onPress={() => navigation.navigate('Home')} />
        <Button title="Explorar" onPress={() => {}} />
        <Button title="Adicionar" onPress={() => navigation.navigate('Adicionar')} />
        <Button title="Prime Reading" onPress={() => {}} />
        <Button title="Romance" onPress={() => {}} />
        <Button title="Crime" onPress={() => {}} />
      </View>
      <View style={styles.librarySection}>
        <Text style={styles.sectionTitle}>Da sua biblioteca</Text>
        <ScrollView horizontal>
          <Image source={{ uri: 'caminho/para/imagem1.jpg' }} style={styles.bookCover} />
          <Image source={{ uri: 'caminho/para/imagem2.jpg' }} style={styles.bookCover} />
          <Image source={{ uri: 'caminho/para/imagem3.jpg' }} style={styles.bookCover} />
          <Image source={{ uri: 'caminho/para/imagem4.jpg' }} style={styles.bookCover} />
          <Image source={{ uri: 'caminho/para/imagem5.jpg' }} style={styles.bookCover} />
        </ScrollView>
      </View>
      <View style={styles.similarSection}>
        <Text style={styles.sectionTitle}>Alugados</Text>
        <ScrollView horizontal>
          <Image source={{ uri: 'caminho/para/imagem6.jpg' }} style={styles.bookCover} />
          <Image source={{ uri: 'caminho/para/imagem7.jpg' }} style={styles.bookCover} />
          <Image source={{ uri: 'caminho/para/imagem8.jpg' }} style={styles.bookCover} />
          <Image source={{ uri: 'caminho/para/imagem9.jpg' }} style={styles.bookCover} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  search: {
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  librarySection: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookCover: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  similarSection: {
    padding: 10,
  },
});
