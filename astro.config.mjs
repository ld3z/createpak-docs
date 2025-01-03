import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://createpak-docs.vercel.app",

  integrations: [
    starlight({
      title: "Createpak",
      customCss: [
        "./src/styles/custom.css",
        "@fontsource-variable/inter",
      ],
      social: { github: "https://github.com/ld3z/createpak-docs" },
      logo: { src: "./src/assets/createpak_logo.webp", replacesTitle: true },
      favicon: '/favicon.png',
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
  ],

  adapter: vercel(),
});