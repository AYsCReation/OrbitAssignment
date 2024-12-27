import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MainHeader from '../components/Header/Index';
import MidSection from '../components/MidSection';
import TopNomads from '../components/TopNomads';

const hashtags = Array.from({ length: 10 }, (_, index) => ({
  id: `${index}`,
  title: `#hashtag${index + 1}`,
  image: `https://picsum.photos/200?random=${index}`,
}));

const community = Array.from({ length: 10 }, (_, index) => ({
  id: `${index}`,
  title: `Community ${index + 1}`,
  image: `https://picsum.photos/200?random=${index + 10}`,
}));

const nomads = Array.from({ length: 6 }, (_, index) => ({
  id: `${index}`,
  username: `@nomad${index + 1}`,
  followers: `${200 + index}k`,
  image: `https://picsum.photos/200?random=${index + 20}`,
}));

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredHashtags = searchQuery
    ? hashtags.filter((hashtag) =>
        hashtag.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : hashtags;

  const filteredCommunity = searchQuery
    ? community.filter((comm) =>
        comm.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : community;

  const filteredNomads = searchQuery
    ? nomads.filter((nomad) =>
        nomad.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : nomads;
console.log(filteredHashtags , filteredCommunity , filteredNomads);
  return (
    <ScrollView style={styles.container}>
      <MainHeader onSearch={handleSearch} />
      <MidSection title="Trending Hashtags" data={filteredHashtags} />
      <MidSection title="Top Community" data={filteredCommunity} />
      <TopNomads title="Top Nomads" data={filteredNomads} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF2F5',
    padding: 16,
  },
});

export default SearchScreen;
