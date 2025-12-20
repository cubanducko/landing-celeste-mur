// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import reactI18next from "astro-react-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    reactI18next({
      defaultLocale: "es-ES",
      locales: ["en-US", "es-ES"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
