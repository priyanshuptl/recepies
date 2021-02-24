import React from 'react';

import { ScreenNames } from '../constants/enums';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const meals = availableMeals.filter((meal) =>
    meal.categoryId.includes(navigation.getParam('category').id)
  );

  return (
    <MealList
      data={meals}
      onItemSelect={(item) =>
        navigation.navigate(ScreenNames.MealDetails, { item })
      }
    />
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: navigation.getParam('category').title,
});

export default CategoryMealsScreen;
