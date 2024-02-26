import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// the store itself does not need any change
export const useSwapiStore = create(
  persist(
    (set) => ({
      count:0,
      prev:null,
      next:null,
      type:null,
      results:[],
      setResults: (newState) => set({ 
        results: newState.results, 
        previous: newState.previous,
        next:newState.next,
        type:newState.type,
        count:newState.count
      }),
      clearStore: () => set({ 
        results:[] , 
        previous: null,
        next: null,
        type:null,
        count: 0
      }),
    }),
    {
      name: 'swapi-storage',
    },
  ),
)