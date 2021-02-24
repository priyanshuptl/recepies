import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {
  const { data, onItemSelect } = props;
  return (
    <FlatList
      {...props}
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item, index }) =>
        MealItem({
          item,
          onSelect: () => onItemSelect(item, index),
        })
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MealList;
