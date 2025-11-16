export interface SupportCategory {
  id: string
  titleKey: string
  descriptionKey: string
  icon: string
  color: string
  articlesKey: string
  views: number[]
}

export const supportCategories: SupportCategory[] = [
  {
    id: 'technical',
    titleKey: 'support.categories.technical.title',
    descriptionKey: 'support.categories.technical.description',
    icon: '🔧',
    color: 'from-blue-500 to-cyan-500',
    articlesKey: 'support.articles.technical',
    views: [1250, 890, 756, 634]
  },
  {
    id: 'billing',
    titleKey: 'support.categories.billing.title',
    descriptionKey: 'support.categories.billing.description',
    icon: '💳',
    color: 'from-green-500 to-emerald-500',
    articlesKey: 'support.articles.billing',
    views: [980, 743, 567, 432]
  },
  {
    id: 'features',
    titleKey: 'support.categories.features.title',
    descriptionKey: 'support.categories.features.description',
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
    articlesKey: 'support.articles.features',
    views: [1456, 823, 712, 598]
  },
  {
    id: 'account',
    titleKey: 'support.categories.account.title',
    descriptionKey: 'support.categories.account.description',
    icon: '👤',
    color: 'from-orange-500 to-red-500',
    articlesKey: 'support.articles.account',
    views: [1123, 687, 543, 321]
  }
]
