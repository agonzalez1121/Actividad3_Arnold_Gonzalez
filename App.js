import { StyleSheet, Text, View } from 'react-native';
import Foco from './src/Components/Foco';

export default function App() {
  return (
    <View style={styles.container}>
      <Foco/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2FFF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
