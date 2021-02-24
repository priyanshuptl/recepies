import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { ScreenNames } from '../constants/enums';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
  const GridItem = ({ item }) => (
    <View style={{ ...styles.gridItem, backgroundColor: item.color }}>
      <TouchableOpacity
        style={styles.gridItemTouchable}
        onPress={() =>
          navigation.navigate(ScreenNames.CategoryMeals, { category: item })
        }>
        <Text style={styles.gridTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={CATEGORIES}
      renderItem={GridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  gridItem: {
    flex: 1,
    height: 150,
    margin: 10,
    elevation: 3,
    borderRadius: 10,
  },
  gridItemTouchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  gridTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CategoriesScreen;
