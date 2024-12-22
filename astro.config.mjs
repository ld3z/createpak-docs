import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ld3z.github.io",
  base: "/site6",
  integrations: [
    starlight({
      title: "Createpak",
      social: { github: "https://github.com/ld3z/site6" },
      logo: { src: "./src/assets/createpak_logo.png" },
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
  ],
});
