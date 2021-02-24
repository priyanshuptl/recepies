import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';

const MealDetailsScreen = ({ navigation }) => {
  const {
    id,
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps,
  } = navigation.getParam('item');

  const dispatch = useDispatch();

  const onFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(navigation.getParam('item')));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setParams({
      toggleFav: onFavoriteHandler,
    });
  }, [toggleFavorite]);

  const isFavorite = useSelector(({ meals: { favoriteMeals } }) =>
    favoriteMeals.some((meal) => meal.id === id)
  );

  useEffect(() => {
    navigation.setParams({ isFavorite });
  }, [isFavorite]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.row}>
        <Text>{duration}m</Text>
        <Text>{complexity.toUpperCase()}</Text>
        <Text>{affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <Text key={'ingredient' + ingredient} style={styles.item}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step, i) => (
        <Text key={'' + i + step} style={styles.item}>
          {i + 1}. {step}
        </Text>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('item').title,
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Favorite'
        iconName={
          navigation.getParam('isFavorite') ? 'ios-star' : 'ios-star-outline'
        }
        onPress={navigation.getParam('toggleFav')}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    // borderColor: '#ccc',
    // borderWidth: 1,
    elevation: 1,
    backgroundColor: 'white',
  },
});

export default MealDetailsScreen;
