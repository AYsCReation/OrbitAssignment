import React from 'react';
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const followedHashtags = ['#Adventure', '#Travel', '#Photography', '#RoadTrip'];

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>@traveler123</Text>
        <Text style={styles.bio}>
          Wanderer | Explorer | Capturing moments around the globe 🌍
        </Text>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={16} color="#fff" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Followed Hashtags Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Followed Hashtags</Text>
        <FlatList
          data={followedHashtags}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.hashtagContainer}>
              <Text style={styles.hashtag}>{item}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Recent Activity Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityContainer}>
          <Ionicons name="heart" size={16} color="#FF4757" style={styles.activityIcon} />
          <Text style={styles.activityText}>Liked a post in #Adventure</Text>
        </View>
        <View style={styles.activityContainer}>
          <Ionicons name="people" size={16} color="#1E90FF" style={styles.activityIcon} />
          <Text style={styles.activityText}>Joined the "Mountain Lovers" community</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F8FA',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  hashtagContainer: {
    backgroundColor: '#EAF0FA',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  hashtag: {
    fontSize: 14,
    color: '#007AFF',
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityIcon: {
    marginRight: 8,
  },
  activityText: {
    fontSize: 14,
    color: '#333',
  },
});

export default ProfileScreen;
