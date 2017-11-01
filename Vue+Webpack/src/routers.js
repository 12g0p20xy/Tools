import Index from './components/index.vue'
import Page from './components/page.vue'

export default [
  { path: '/', component: Index },
  { path: '/page/:id', component: Page, name: 'page' },
]
