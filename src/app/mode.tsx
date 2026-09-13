import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ModeScreen() {
    const [selectedMode, setSelectedMode] = useState<string | null>(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                <Pressable style={styles.backButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={28} color="#171717" />
                </Pressable>

                <View style={styles.heading}>
                    <Text style={styles.title}>How are we doing this?</Text>

                    <Text style={styles.subtitle}>
                        Pick your mode. You can always change it later.
                    </Text>
                </View>

                <View style={styles.options}>

                    <Pressable
                        style={[
                            styles.card,
                            selectedMode === 'fun' && styles.selectedCard,
                        ]}
                        onPress={() => setSelectedMode('fun')}
                    >
                        <View style={styles.iconCircle}>
                            <Ionicons name="sparkles-outline" size={30} color="#171717" />
                        </View>

                        <Text style={styles.cardTitle}>Create for fun</Text>

                        <Text style={styles.cardDescription}>
                            Dream it up, explore ideas, and create without the planning
                            pressure.
                        </Text>
                    </Pressable>

                    <Pressable
                        style={[
                            styles.card,
                            selectedMode === 'real' && styles.selectedCard,
                        ]}
                        onPress={() => setSelectedMode('real')}
                    >
                        <View style={styles.iconCircle}>
                            <Ionicons name="calendar-outline" size={30} color="#171717" />
                        </View>

                        <Text style={styles.cardTitle}>Plan a real event</Text>

                        <Text style={styles.cardDescription}>
                            Build your budget, guest list, timeline, vendors, and everything
                            you need.
                        </Text>
                    </Pressable>

                </View>

                <View style={styles.bottom}>
                    <Pressable
                        disabled={!selectedMode}
                        style={[
                            styles.continueButton,
                            !selectedMode && styles.disabledButton,
                        ]}
                        onPress={() => {
                            if (!selectedMode) return;

                            console.log('Selected mode:', selectedMode);
                        }}
                    >
                        <Text
                            style={[
                                styles.continueText,
                                !selectedMode && styles.disabledText,
                            ]}
                        >
                            Continue
                        </Text>
                    </Pressable>
                </View>

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
        paddingHorizontal: 24,
        paddingTop: 20,
    },

    backButton: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        marginBottom: 38,
    },

    heading: {
        marginBottom: 42,
    },

    title: {
        fontSize: 44,
        lineHeight: 50,
        fontWeight: '700',
        color: '#171717',
        letterSpacing: -1.5,
        marginBottom: 16,
    },

    subtitle: {
        fontSize: 19,
        lineHeight: 27,
        color: '#6B6B6B',
    },

    options: {
        gap: 18,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1.5,
        borderColor: '#E1DED9',
        borderRadius: 24,
        padding: 24,
        minHeight: 205,
    },

    selectedCard: {
        borderColor: '#171717',
        borderWidth: 3,
    },

    iconCircle: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#F3F1EE',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    cardTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: '#171717',
        marginBottom: 9,
    },

    cardDescription: {
        fontSize: 16,
        lineHeight: 23,
        color: '#6B6B6B',
        maxWidth: 310,
    },

    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 28,
    },

    continueButton: {
        height: 64,
        borderRadius: 20,
        backgroundColor: '#171717',
        justifyContent: 'center',
        alignItems: 'center',
    },

    disabledButton: {
        backgroundColor: '#E4E1DD',
    },

    continueText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
    },

    disabledText: {
        color: '#A5A19C',
    },
});