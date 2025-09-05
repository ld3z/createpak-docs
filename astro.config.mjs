import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

import UnoCSS from "@unocss/astro";
import remarkIconShorthand from "./emojis.mjs";
import starlightThemeGalaxy from "starlight-theme-galaxy";

export default defineConfig({
  site: "https://createpak-docs.vercel.app",

  integrations: [
    starlight({
      plugins: [starlightThemeGalaxy()],
      title: "Createpak",
      customCss: [
        "./src/styles/custom.css",
        "@fontsource-variable/inter",
        "./src/styles/inline.css",
        "./src/styles/table.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ld3z/createpak-docs",
        },
      ],
      logo: { src: "./src/assets/createpak_logo.webp", replacesTitle: true },
      favicon: "/favicon.png",
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
    UnoCSS(),
  ],

  markdown: {
    remarkPlugins: [remarkIconShorthand],
  },

  adapter: vercel(),
});
