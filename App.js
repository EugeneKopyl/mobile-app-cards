import Nav from './components/nav/nav';
import {StyleSheet, View} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Nav></Nav>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
