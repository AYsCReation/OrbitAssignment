import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Community {
  id: string;
  name: string;
  members: string;
  image: string;
}

const communities = Array.from({ length: 12 }, (_, index) => ({
  id: `${index}`,
  name: `Community ${index + 1}`,
  members: `${500 + index * 50} members`,
  image: `https://picsum.photos/200?random=${index + 30}`,
}));

const CommunityScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communities</Text>
      <FlatList
        data={communities}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.communityCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.members}>{item.members}</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinText}>Join</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
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
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  communityCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  members: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  joinButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  joinText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CommunityScreen;
