const placeholderOptions = [
  { label: 'Stock Fotage', link: '/' },
  { label: 'Motion Graphics', link: '/' },
  { label: 'All Stock Videos', link: '/' },
]

const commonProps = { link: '/', options: placeholderOptions }

export const ALL_NAV_ITEMS = [
  { title: 'Stock Video', ...commonProps },
  { title: 'Video Templates', ...commonProps },
  { title: 'Music', ...commonProps },
  { title: 'Sound Effects', ...commonProps },
  { title: 'Graphic Templates', ...commonProps },
  { title: 'Presentation Templates', ...commonProps },
  { title: 'Graphics', ...commonProps },
  { title: 'Photos', ...commonProps },
  { title: 'More', ...commonProps },
]

export const LESS_NAV_ITEMS = [
  { title: 'Stock Video', ...commonProps },
  { title: 'Video Templates', ...commonProps },
  { title: 'Music', ...commonProps },
  { title: 'Sound Effects', ...commonProps },
  { title: 'Graphic Templates', ...commonProps },
  { title: 'More', ...commonProps },
]
