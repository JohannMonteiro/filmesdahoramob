import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import TituloSecao from './components/TituloSecao.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      
      <TituloSecao texto=" Filmes em alta"  />
      <TituloSecao texto=" Séries em alta"/>
      < TituloSecao texto=" Dramas"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212121',
    padding: 8,
  },
  
});
