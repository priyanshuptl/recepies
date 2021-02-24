import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MealList from '../components/MealList';
import { ScreenNames } from '../constants/enums';
import { useSelector } from 'react-redux';

const FavoritesScreen = ({ navigation }) => {
  const meals = useSelector(({ meals }) => meals.favoriteMeals);

  if (!meals || meals.length <= 0) {
    return (
      <View style={styles.container}>
        <Text>No Favorite Meals found! Start adding some!</Text>
      </View>
    );
  }

  return (
    <MealList
      data={meals}
      extraData={meals}
      onItemSelect={(item) =>
        navigation.navigate(ScreenNames.MealDetails, { item, isFavorite: true })
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
