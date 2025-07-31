import { CountryTypes } from '@/types'
import { create } from 'zustand'

type State = {
  countries: CountryTypes[]
  filteredCountries: CountryTypes[]
  setCountries: (data: CountryTypes[]) => void
  searchTerm: string
  selectedRegion: string
  search: (term: string) => void
  filterByRegion: (region: string) => void
  sortBy: (field: SortField, order?: SortOrder) => void
  resetFilters: () => void
}

type SortField = 'name' | 'population'
type SortOrder = 'asc' | 'desc'

export const useCountriesStore = create<State>((set, get) => ({
  countries: [],
  filteredCountries: [],
  searchTerm: '',
  selectedRegion: 'All',

  setCountries: (data) => {
    const sortedData = [...data].sort((a, b) => {
      const nameA = a.name.common.toLowerCase()
      const nameB = b.name.common.toLowerCase()
      return nameA.localeCompare(nameB)
    })
    set({ countries: sortedData, filteredCountries: sortedData })
  },

  search: (term) => {
    const { countries } = get()
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase()),
    )
    set({ filteredCountries: filtered, searchTerm: term })
  },

  filterByRegion: (region) => {
    const { countries } = get()
    if (region === 'All') {
      set({ filteredCountries: countries })
    } else {
      const filtered = countries.filter((country) => country.region === region)
      set({ filteredCountries: filtered, selectedRegion: region })
    }
  },

  sortBy: (field: SortField, order?: SortOrder) => {
    const sorted = [...get().filteredCountries].sort((a, b) => {
      if (field === 'name') {
        const nameA = a.name.common.toLowerCase()
        const nameB = b.name.common.toLowerCase()
        if (nameA < nameB) return order === 'asc' ? -1 : 1
        if (nameA > nameB) return order === 'asc' ? 1 : -1
        return 0
      }
      const aVal = a[field] ?? 0
      const bVal = b[field] ?? 0
      return order === 'asc' ? aVal - bVal : bVal - aVal
    })
    set({ filteredCountries: sorted })
  },

  resetFilters: () => {
    const { countries } = get()
    set({
      filteredCountries: countries,
      searchTerm: '',
      selectedRegion: 'All',
    })
  },
}))
