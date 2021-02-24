import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = ({
  item: { title, imageUrl, duration, complexity, affordability },
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerButton}
        activeOpacity={0.7}
        onPress={onSelect}>
        <View style={styles.header}>
          <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 3,
  },
  containerButton: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: '85%',
  },
  title: {
    fontSize: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
    padding: 8,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    borderColor: 'blue',
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});

export default MealItem;
