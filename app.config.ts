import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  server: {
    preset: 'cloudflare-pages',
    prerender: {
      failOnError: true,
      crawlLinks: false,
      routes: ['/'],
    },
    cloudflare: {
      pages: {},
    },
  },
})
