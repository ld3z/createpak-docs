import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno(), // Or your preferred base preset
    presetIcons({
      // Use the 'mask' mode for CSS-based icons
      mode: 'auto', // Or 'background-img' if you prefer background images
      // Optional: customize other options
      scale: 1.2, // Default icon size scaling
      warn: true, // Warn when icons requested are not found
      // Example: prefix for all icons
      // prefix: 'icon-',
      // Example: customize collections
      // collections: {
      //   'my-icons': () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      // }
    }),
  ],
  shortcuts: [
    // Shortcut to convert :collection-name: to i-collection-name
    // Example: :mdi-home: -> i-mdi-home
    [/^:([a-z0-9-]+)-([a-z0-9-]+):$/, ([, collection, name]) => `i-${collection}-${name}`],

    // Add any other project-specific shortcuts here
    // Example: ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
  // Optional: Add rules or transformers if needed
  // rules: [],
  // transformers: [],
}) 