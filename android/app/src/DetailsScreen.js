import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image?.original }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.info}>Language: {movie.language}</Text>
      <Text style={styles.info}>Premiered: {movie.premiered}</Text>
      <Text style={styles.info}>Rating: {movie.rating?.average || 'N/A'}</Text>
      <Text style={styles.summary}>{movie.summary?.replace(/<[^>]+>/g, '')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 10,
  },
  info: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 5,
  },
  summary: {
    fontSize: 16,
    color: '#ccc',
  },
});

export default DetailsScreen;
