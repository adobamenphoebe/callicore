import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const events = [
  { name: 'Wedding', icon: 'heart-outline' },
  { name: 'Birthday', icon: 'gift-outline' },
  { name: 'Baby shower', icon: 'balloon-outline' },
  { name: 'Engagement', icon: 'diamond-outline' },
  { name: 'Anniversary', icon: 'heart-circle-outline' },
  { name: 'Graduation', icon: 'school-outline' },
  { name: 'Office party', icon: 'briefcase-outline' },
  { name: 'Prom', icon: 'musical-notes-outline' },
  { name: 'Dinner Party', icon: 'wine-outline' },
  { name: 'Other', icon: 'sparkles-outline' },
];

export default function HomeScreen() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.logo}>callicore</Text>

        <Text style={styles.title}>
          What are we celebrating?
        </Text>

        <Text style={styles.subtitle}>
          Let's make something unforgettable.
        </Text>

        <View style={styles.grid}>
          {events.map((event) => {
            const selected = selectedEvent === event.name;

            return (
              <Pressable
                key={event.name}
                onPress={() => setSelectedEvent(event.name)}
                style={[
                  styles.eventCard,
                  selected && styles.eventCardSelected,
                ]}
              >
                <Ionicons
                  name={event.icon as any}
                  size={27}
                  color="#171717"
                />

                <Text style={styles.eventText}>
                  {event.name}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          style={[
            styles.unsureButton,
            selectedEvent === 'Not sure yet' && styles.unsureButtonSelected,
          ]}
          onPress={() => setSelectedEvent('Not sure yet')}
        >
          <Text style={styles.unsureText}>
            I'm not sure yet
          </Text>

          <Ionicons
            name="arrow-forward"
            size={18}
            color="#171717"
          />
        </Pressable>

        {selectedEvent && (
          <Pressable
            style={styles.continueButton}
            onPress={() => router.push('/mode')}
          >
            <Text style={styles.continueText}>
              Continue
            </Text>
          </Pressable>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F5',
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
    paddingBottom: 40,
  },

  logo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#171717',
    marginBottom: 48,
  },

  title: {
    fontSize: 38,
    fontWeight: '700',
    lineHeight: 44,
    color: '#171717',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 25,
    color: '#666666',
    marginBottom: 34,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  eventCard: {
    width: '48%',
    minHeight: 112,
    borderWidth: 1,
    borderColor: '#E4E0DB',
    borderRadius: 20,
    padding: 18,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },

  eventCardSelected: {
    borderColor: '#171717',
    borderWidth: 2,
  },

  eventText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171717',
    marginTop: 18,
  },

  unsureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    paddingVertical: 17,
    paddingHorizontal: 4,
  },

  unsureButtonSelected: {
    opacity: 0.55,
  },

  unsureText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171717',
  },

  continueButton: {
    backgroundColor: '#171717',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 14,
  },

  continueText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});