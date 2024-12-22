import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ld3z.github.io",
  base: "/site6",
  integrations: [
    starlight({
      title: "Createpak",
      customCss: ["@fontsource/inter/400.css", "@fontsource/inter/600.css"],
      social: { github: "https://github.com/ld3z/site6" },
      logo: { src: "./src/assets/createpak_logo.png", replacesTitle: true },
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
  ],
});
