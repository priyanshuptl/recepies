export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SAVE_FILTERS = 'SAVE_FILTERS';

export const toggleFavorite = (meal) => ({
  type: TOGGLE_FAVORITE,
  meal,
});

export const saveFiltersAction = (filters) => ({
  type: SAVE_FILTERS,
  filters,
});
