import React, { useState, useEffect } from 'react';
import { Alert, FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Lendo() {
  const [textInput, setTextInput] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const savedBooks = await AsyncStorage.getItem('Lendo');
      if (savedBooks) setBooks(JSON.parse(savedBooks));
    } catch (error) {
      console.log('Erro ao carregar livros:', error);
    }
  };

  const saveBooks = async () => {
    try {
      await AsyncStorage.setItem('Lendo', JSON.stringify(books));
    } catch (error) {
      console.log('Erro ao salvar livros:', error);
    }
  };

  const addBook = () => {
    if (textInput.trim() === '') {
      Alert.alert('Erro', 'Digite o nome do livro.');
      return;
    }
    const newBook = {
      id: Date.now().toString(),
      title: textInput,
    };
    setBooks([...books, newBook]);
    setTextInput('');
  };

  const removeBook = (id) => {
    Alert.alert(
      'Remover livro',
      'Deseja remover este livro da lista?',
      [
        {
          text: 'Sim',
          onPress: () => {
            const updatedBooks = books.filter(book => book.id !== id);
            setBooks(updatedBooks);
          },
        },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  useEffect(() => {
    saveBooks();
  }, [books]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={{ flex: 1 }}
        resizeMode="repeat"
      >
        <View style={styles.header}>
          <Text style={styles.title}>Quero Ler</Text>
        </View>

        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookItem}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => removeBook(item.id)}>
                <Ionicons name="trash" size={24} color="#ff5555" />
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.list}
        />

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar livro..."
            value={textInput}
            onChangeText={setTextInput}
            placeholderTextColor="#aeaeae"
          />
          <TouchableOpacity style={styles.addButton} onPress={addBook}>
            <Ionicons name="add" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  list: {
    padding: 20,
  },
  bookItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    padding: 15,
    borderRadius: 30,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#000',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});