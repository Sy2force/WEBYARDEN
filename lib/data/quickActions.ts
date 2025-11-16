export interface QuickAction {
  id: string
  titleKey: string
  descriptionKey: string
  icon: string
  action: string
  available: boolean
  color: string
}

export const quickActions: QuickAction[] = [
  {
    id: 'chat',
    titleKey: 'support.quickActions.chat.title',
    descriptionKey: 'support.quickActions.chat.description',
    icon: '💬',
    action: 'chat',
    available: true,
    color: 'bg-gradient-to-r from-blue-600 to-purple-600'
  },
  {
    id: 'call',
    titleKey: 'support.quickActions.call.title',
    descriptionKey: 'support.quickActions.call.description',
    icon: '📞',
    action: 'call',
    available: true,
    color: 'bg-gradient-to-r from-green-600 to-teal-600'
  },
  {
    id: 'email',
    titleKey: 'support.quickActions.email.title',
    descriptionKey: 'support.quickActions.email.description',
    icon: '📧',
    action: 'email',
    available: true,
    color: 'bg-gradient-to-r from-indigo-600 to-blue-600'
  },
  {
    id: 'urgent',
    titleKey: 'support.quickActions.urgent.title',
    descriptionKey: 'support.quickActions.urgent.description',
    icon: '🚨',
    action: 'urgent',
    available: true,
    color: 'bg-gradient-to-r from-red-600 to-pink-600'
  }
]
