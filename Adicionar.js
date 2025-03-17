import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Button } from 'react-native';

export default function Adicionar({ navigation }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSave = () => {
    console.log('Livro salvo:', { title, author, description, image });
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>
          <Image source={require('C:/AppReservadeLivro/Livraria/imagens/icon.png')} style={styles.hamburgerIcon} />
        </TouchableOpacity>
      </View>
      {menuVisible && (
        <View style={styles.navbar}>
          <Button title="Início" onPress={() => navigation.navigate('Home')} />
          <Button title="Explorar" onPress={() => {}} />
          <Button title="Adicionar" onPress={() => navigation.navigate('Adicionar')} />
          <Button title="Prime Reading" onPress={() => {}} />
          <Button title="Romance" onPress={() => {}} />
          <Button title="Crime" onPress={() => {}} />
        </View>
      )}
      <View style={styles.main}>
        <Text style={styles.sectionTitle}>Adicionar Livro</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={author}
          onChangeText={setAuthor}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <TouchableOpacity style={styles.imageButton} onPress={() => {}}>
          <Text style={styles.imageButtonText}>Adicionar Imagem</Text>
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={styles.imagePreview} />
        )}
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',  // Alinha os itens horizontalmente
    alignItems: 'center',  // Centraliza verticalmente os itens
    justifyContent: 'flex-end',  // Posiciona os itens no final (direita)
    paddingBottom: 10,
    paddingTop: 10,
  },
  hamburgerButton: {
    padding: 10,
  },
  hamburgerIcon: {
    width: 24,
    height: 24,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    marginBottom: 20,
  },
  main: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  input: {
    width: '100%',
    padding: 16,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  imageButton: {
    backgroundColor: '#4caf50',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  imageButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 120,
    height: 180,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 20,
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
});
