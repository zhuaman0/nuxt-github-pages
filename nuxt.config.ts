// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/main.css',
  ],
  components: [
	{
		path: '~/components/ui',
		extensions: ['.vue'],
		prefix: ''
	},
	{
		path: '~/components/shared',
		extensions: ['.vue'],
		prefix: ''
	},
	{
		path: '~/components',
		extensions: ['.vue'],
		prefix: ''
	}
  ],
})