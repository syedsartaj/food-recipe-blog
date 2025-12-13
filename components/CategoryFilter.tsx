'use client'

import { Utensils, Coffee, Sun, Moon, Cake } from 'lucide-react'

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: 'all', label: 'All Recipes', icon: Utensils },
  { id: 'breakfast', label: 'Breakfast', icon: Coffee },
  { id: 'lunch', label: 'Lunch', icon: Sun },
  { id: 'dinner', label: 'Dinner', icon: Moon },
  { id: 'desserts', label: 'Desserts', icon: Cake }
]

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = selectedCategory === category.id

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`filter-button flex items-center gap-2 ${
              isActive ? 'filter-button-active' : 'filter-button-inactive'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}
