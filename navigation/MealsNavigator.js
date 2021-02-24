import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

import { ScreenNames } from '../constants/enums';
import Colors from '../constants/colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultNavigationOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
};

const MenuHeaderButton = (navigation) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title='Menu'
      iconName='md-menu'
      onPress={() => navigation.toggleDrawer()}
    />
  </HeaderButtons>
);

const MealsNavigator = createStackNavigator(
  {
    [ScreenNames.Categories]: {
      screen: CategoriesScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => MenuHeaderButton(navigation),
      }),
    },
    [ScreenNames.CategoryMeals]: {
      screen: CategoryMealsScreen,
      // navigationOptions: ({ navigation }) => ({
      //   headerLeft: () => MenuHeaderButton(navigation),
      // }),
    },
    [ScreenNames.MealDetails]: MealDetailsScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    [ScreenNames.Favorites]: {
      screen: FavoritesScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => MenuHeaderButton(navigation),
      }),
    },
    [ScreenNames.MealDetails]: MealDetailsScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const TabsNavigator = createMaterialBottomTabNavigator(
  {
    [ScreenNames.MealsTab]: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-restaurant' color={tintColor} size={25} />
        ),
        tabBarColor: Colors.primary,
      },
    },
    [ScreenNames.FavoritesTab]: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-star' color={tintColor} size={25} />
        ),
        tabBarColor: Colors.accent,
      },
    },
  },
  {
    activeColor: 'white',
    shifting: true,
  }
);

const FilterNavigator = createStackNavigator(
  {
    [ScreenNames.Filters]: {
      screen: FilterScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => MenuHeaderButton(navigation),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='Save'
              iconName='ios-save'
              onPress={navigation.getParam('save')}
            />
          </HeaderButtons>
        ),
      }),
    },
  },
  {
    defaultNavigationOptions,
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    [ScreenNames.FavMealsMenu]: TabsNavigator,
    [ScreenNames.FiltersMenu]: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
    },
  }
);

export default createAppContainer(DrawerNavigator);
