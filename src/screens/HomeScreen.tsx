import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const featuredDestinations = [
  { id: '1', title: 'Paris, France', image: 'https://picsum.photos/300/200?1', content: 'Explore the romantic city of lights.', hashtags: ['#Adventure', '#Lifestyle'] },
  { id: '2', title: 'Rome, Italy', image: 'https://picsum.photos/300/200?2', content: 'Discover ancient ruins and art.', hashtags: ['#History', '#Culture'] },
  { id: '3', title: 'Santorini, Greece', image: 'https://picsum.photos/300/200?3', content: 'Experience breathtaking sunsets.', hashtags: ['#Travel', '#Beach'] },
  { id: '4', title: 'Kyoto, Japan', image: 'https://picsum.photos/300/200?4', content: 'Immerse in traditional culture.', hashtags: ['#Nature', '#Adventure'] },
];

const popularActivities = [
  { id: '1', title: 'Hiking', icon: 'terrain' },
  { id: '2', title: 'Cycling', icon: 'pedal-bike' },
  { id: '3', title: 'Photography', icon: 'camera-alt' },
  { id: '4', title: 'Boating', icon: 'directions-boat' },
];

const upcomingTrips = [
  { id: '1', destination: 'Bali, Indonesia', date: 'Jan 15, 2024', image: 'https://picsum.photos/300/200?5' },
  { id: '2', destination: 'New York, USA', date: 'Feb 10, 2024', image: 'https://picsum.photos/300/200?6' },
];

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Explore Featured Destinations</Text>
      <FlatList
        data={featuredDestinations}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <View style={styles.hashtagsContainer}>
              {item.hashtags.map((hashtag, index) => (
                <Text key={index} style={styles.hashtag}>
                  {hashtag}
                </Text>
              ))}
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Popular Activities</Text>
      <View style={styles.activitiesContainer}>
        {popularActivities.map((activity) => (
          <TouchableOpacity key={activity.id} style={styles.activityCard}>
            <Icon name={activity.icon} size={32} color="#007AFF" />
            <Text style={styles.activityTitle}>{activity.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Upcoming Trips</Text>
      {upcomingTrips.map((trip) => (
        <View key={trip.id} style={styles.tripCard}>
          <Image source={{ uri: trip.image }} style={styles.tripImage} />
          <View style={styles.tripDetails}>
            <Text style={styles.tripDestination}>{trip.destination}</Text>
            <Text style={styles.tripDate}>{trip.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  card: {
    marginRight: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    overflow: 'hidden',
    width: 200,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  content: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
    marginBottom: 8,
  },
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  hashtag: {
    fontSize: 12,
    color: '#007AFF',
    marginRight: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  activitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  activityCard: {
    alignItems: 'center',
    marginBottom: 16,
  },
  activityTitle: {
    fontSize: 14,
    marginTop: 8,
  },
  tripCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tripImage: {
    width: 100,
    height: 100,
  },
  tripDetails: {
    padding: 8,
    justifyContent: 'center',
  },
  tripDestination: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tripDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
