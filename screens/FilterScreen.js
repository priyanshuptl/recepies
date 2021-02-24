import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Colors from '../constants/colors';
import { useDispatch } from 'react-redux';
import { saveFiltersAction } from '../store/actions/meals';

const FilterItem = ({ label, value, onValueChange }) => (
  <View style={styles.filterItem}>
    <Text>{label}</Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      thumbColor={Colors.primary}
    />
  </View>
);

const FilterScreen = ({ navigation }) => {
  const [isGlutineFree, setIsGlutineFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const filters = {
      isGlutineFree,
      isVegan,
      isLactoseFree,
      isVegetarian,
    };
    console.log('filters', filters);
    dispatch(saveFiltersAction(filters));
  }, [isGlutineFree, isVegan, isLactoseFree, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterItem
        label='Glutine-Free'
        value={isGlutineFree}
        onValueChange={setIsGlutineFree}
      />
      <FilterItem label='Vegan' value={isVegan} onValueChange={setIsVegan} />
      <FilterItem
        label='Lactose-Free'
        value={isLactoseFree}
        onValueChange={setIsLactoseFree}
      />
      <FilterItem
        label='Vegetarian'
        value={isVegetarian}
        onValueChange={setIsVegetarian}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
    textAlign: 'center',
  },
  filterItem: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
});

export default FilterScreen;
