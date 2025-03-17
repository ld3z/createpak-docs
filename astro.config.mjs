import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

import icon from "astro-icon";

export default defineConfig({
  site: "https://createpak-docs.vercel.app",

  integrations: [
    starlight({
      title: "Createpak",
      customCss: [
        "./src/styles/custom.css",
        "@fontsource-variable/inter",
        "./src/styles/inline.css",
        "./src/styles/table.css",
      ],
      social: { github: "https://github.com/ld3z/createpak-docs" },
      logo: { src: "./src/assets/createpak_logo.webp", replacesTitle: true },
      favicon: "/favicon.png",
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
    icon(),
  ],

  adapter: vercel(),
});
