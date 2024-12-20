import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })}>
      <View style={styles.card}>
        <Image source={{ uri: item.show.image?.medium }} style={styles.thumbnail} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.show.name}</Text>
          <Text style={styles.summary} numberOfLines={3}>{item.show.summary?.replace(/<[^>]*>/g, '')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
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
  info: { flex: 1, padding: 10 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  summary: { color: '#ccc', marginTop: 5 },
});

export default HomeScreen;
