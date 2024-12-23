import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ld3z.github.io",
  base: "/createpak-docs",
  integrations: [
    starlight({
      title: "Createpak",
      customCss: [
        "./src/styles/custom.css",
        "@fontsource-variable/inter",
      ],
      social: { github: "https://github.com/ld3z/site6" },
      logo: { src: "./src/assets/createpak_logo.webp", replacesTitle: true },
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
  ],
});
