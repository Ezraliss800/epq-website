/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
// const vuetify = createVuetify({
//     components,
//     directives,
//     icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
//     theme: {
//       defaultTheme: 'dark'
//     }
//   })