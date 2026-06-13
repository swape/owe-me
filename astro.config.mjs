// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  fonts: [
    {
      provider: fontProviders.googleicons(),
      name: 'Material Symbols Outlined',
      cssVariable: '--font-material-symbols',
    },
    {
      provider: fontProviders.googleicons(),
      name: 'Inter',
      cssVariable: '--font-inter',
    }
  ],
})
