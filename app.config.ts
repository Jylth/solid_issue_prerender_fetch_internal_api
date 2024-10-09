import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  server: {
    prerender: {
      failOnError: true,
      crawlLinks: false,
      routes: ['/'],
    },
  },
})
