import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// the store itself does not need any change
export const useCharacterStore = create(
  persist(
    (set) => ({
      count:0,
      prev:null,
      next:null,
      characters:[] ,
      setCharacters: (newState) => set({ 
        characters: newState.results, 
        prev: newState.prev,
        next:newState.next,
        count:newState.count
      }),
    }),
    {
      name: 'food-storage',
    },
  ),
)