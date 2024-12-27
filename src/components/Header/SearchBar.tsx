import React, { useState, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../Components.styles';

interface SearchBarProps {
  onSearch: (query: string) => void; // Function to handle search
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>('');

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  useEffect(() => {
      onSearch(debouncedSearchText);
  }, [debouncedSearchText, onSearch]);

  return (
    <View>
      <TextInput
        style={styles.searchBox}
        placeholder="Search"
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default SearchBar;
