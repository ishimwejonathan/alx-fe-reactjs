// src/recipeStore.js
import { create } from 'zustand';

// Zustand store
export const useRecipeStore = create((set) => ({
  recipes: [],

  // Action: add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action: replace recipes with a new list
  setRecipes: (recipes) => set({ recipes }),
}));
