import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

interface Nomad {
  id: string;
  username: string;
  followers: string;
  image: string;
}

interface TopNomadsProps {
  title: string;
  data: Nomad[];
}

const TopNomads: React.FC<TopNomadsProps> = ({ title, data }) => {
  return (
    <>{ data.length ?
    (<View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.nomadItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.followers}>{item.followers} followers</Text>
          </View>
        )}
      />
    </View>) : (
       <View style={styles.container}><span style={styles.title}>{title}</span> Section has no Data to show</View> 
    )}
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#5A7A7F"
  },
  nomadItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  followers: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default TopNomads;
