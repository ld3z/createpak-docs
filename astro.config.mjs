import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import og from '@astrojs/og';

export default defineConfig({
  site: "https://createpak-docs.vercel.app",
  output: "hybrid",
  integrations: [starlight({
    title: "Createpak",
    customCss: [
      "./src/styles/custom.css",
      "@fontsource-variable/inter",
      "./src/styles/inline.css",
      "./src/styles/table.css",
    ],
    social: { github: "https://github.com/ld3z/createpak-docs" },
    logo: { src: "./src/assets/createpak_logo.webp", replacesTitle: true },
    favicon: '/favicon.png',
    components: {
      Head: "./src/components/Head.astro",
    },
  }), icon(), og()],

  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
});