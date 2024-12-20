import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="#ccc" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for movies..."
        placeholderTextColor="#ccc"
        value={searchTerm}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
});

export default SearchBar;
