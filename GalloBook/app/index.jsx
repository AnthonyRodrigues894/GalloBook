import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={require('../assets/avatar.jpg')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.tittle}>Minha Biblioteca</Text>
        <Text style={styles.text}>
          Organize seus livros em categorias: Quero Ler, Lendo e Lidos!
        </Text>
        <View style={styles.linksContainer}>
          <Link style={styles.button} href="/quero-ler">
            <Text style={styles.buttonText}>Quero Ler</Text>
          </Link>
          <Link style={styles.button} href="/lendo">
            <Text style={styles.buttonText}>Lendo</Text>
          </Link>
          <Link style={styles.button} href="/lidos">
            <Text style={styles.buttonText}>Lidos</Text>
          </Link>
        </View>
      </View>
      <StatusBar style="light" backgroundColor="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 230,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 115,
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
  },
  tittle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },
  linksContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 50,
    paddingVertical: 15,
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});