import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SAVE_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const mealIndex = state.favoriteMeals.findIndex(
        ({ id }) => id === action.meal.id
      );
      if (mealIndex >= 0) {
        const favoriteMeals = [...state.favoriteMeals];
        favoriteMeals.splice(mealIndex, 1);
        return {
          ...state,
          favoriteMeals,
        };
      } else {
        return {
          ...state,
          favoriteMeals: [...state.favoriteMeals, action.meal],
        };
      }

    case SAVE_FILTERS:
      const {
        isGlutineFree,
        isVegan,
        isLactoseFree,
        isVegetarian,
      } = action.filters;
      const filteredMeals = [...state.meals].filter(
        (meal) =>
          !(isGlutineFree && !meal.isGlutineFree) &&
          !(isLactoseFree && !meal.isLactoseFree) &&
          !(isVegetarian && !meal.isVegetarian) &&
          !(isVegan && !meal.isVegan)
      );
      console.log('filteredMeals', filteredMeals);
      return {
        ...state,
        filteredMeals,
      };

    default:
      return state;
  }
};

export default mealsReducer;
