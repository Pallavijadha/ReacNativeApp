import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  const searchMovies = (text) => {
    setQuery(text);
    if (text.length > 2) {
      axios.get(`https://api.tvmaze.com/search/shows?q=${text}`)
        .then(response => setResults(response.data))
        .catch(error => console.error(error));
    }
  };

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <View style={styles.card}>
        <Image source={{ uri: item.show.image?.medium }} style={styles.thumbnail} />
        <Text style={styles.title}>{item.show.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Type to search..."
        value={query}
        onChangeText={searchMovies}
      />
      <FlatList
        data={results}
        renderItem={renderMovie}
        keyExtractor={item => item.show.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  searchBar: { backgroundColor: '#fff', padding: 10, margin: 10, borderRadius: 5 },
  card: { flexDirection: 'row', margin: 10, backgroundColor: '#333', borderRadius: 5 },
  thumbnail: { width: 100, height: 150, borderRadius: 5 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
});

export default SearchScreen;
