"use client"

import { createContext, useContext, useState } from "react"

interface IContextType {
  categoryFilters: string[]
  setCategoryFilters: React.Dispatch<React.SetStateAction<string[]>>
  sort: string
  setShort: React.Dispatch<React.SetStateAction<string>>
}

export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  sort: '',
  setShort: () => '',
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  
  // const [categoryFilter, setCategoryFilter] = useState<string[]>([])
  const [categoryFilter, setCategoryFilter] = useState([])
  const [sort, setSort] = useState('-createdAt')
  
  return (
    <FilterContext.Provider value={{
      categoryFilters: categoryFilter,
      setCategoryFilters: setCategoryFilter,
      sort,
      setShort: setSort
    }}>
      {children}
    </FilterContext.Provider>
  )
}


export const useFilter = () => useContext(FilterContext)

