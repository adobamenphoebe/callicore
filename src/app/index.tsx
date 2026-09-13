import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>callicore</Text>

        <Text style={styles.title}>
          What are we celebrating?
        </Text>

        <Text style={styles.subtitle}>
          Let's make something unforgettable.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F5',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  logo: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 50,
    color: '#171717',
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 46,
    color: '#171717',
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 26,
    color: '#666666',
  },
});