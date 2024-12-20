import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCarousel = ({ title, movies, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item)}>
            <Image
              source={{ uri: item.show.image?.medium }}
              style={styles.thumbnail}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  thumbnail: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 10,
  },
});

export default MovieCarousel;
