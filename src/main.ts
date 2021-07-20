import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/packages/theme-chalk/src/base.scss'
import { ElementComponents, ElementPlugins } from '@/plugins/element'
import router from './router'

const app = createApp(App)
ElementComponents.forEach(component => {
  app.component(component.name, component)
})
ElementPlugins.forEach(plugin => {
  app.use(plugin)
})
app.use(router)
app.mount('#app')
