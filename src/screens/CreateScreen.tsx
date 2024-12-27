import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';

const availableHashtags = ['#Adventure', '#Travel', '#Nature', '#Photography', '#Food', '#Culture'];

const CreateScreen: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);

  const toggleHashtag = (hashtag: string) => {
    setSelectedHashtags((prev) =>
      prev.includes(hashtag) ? prev.filter((item) => item !== hashtag) : [...prev, hashtag]
    );
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Post</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePicker}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
        ) : (
          <View style={styles.placeholderContainer}>
            <Icon name="add" size={48} color="white" />
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={caption}
        onChangeText={setCaption}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Description"
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
      />

      <Text style={styles.sectionTitle}>Add Hashtags</Text>
      <FlatList
        data={availableHashtags}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.hashtag,
              selectedHashtags.includes(item) && styles.hashtagSelected,
            ]}
            onPress={() => toggleHashtag(item)}
          >
            <Text
              style={[
                styles.hashtagText,
                selectedHashtags.includes(item) && styles.hashtagTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.hashtagContainer}
      />

      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="check" size={32} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  imagePicker: {
    height: 180,
    borderRadius: 12,
    backgroundColor: '#007AFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#FFF',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#555',
  },
  hashtagContainer: {
    justifyContent: 'center',
  },
  hashtag: {
    borderWidth: 1,
    borderColor: '#AAA',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: '#FFF',
  },
  hashtagSelected: {
    backgroundColor: '#6200EE',
    borderColor: '#6200EE',
  },
  hashtagText: {
    fontSize: 14,
    color: '#777',
  },
  hashtagTextSelected: {
    color: '#FFF',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#6200EE',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default CreateScreen;
