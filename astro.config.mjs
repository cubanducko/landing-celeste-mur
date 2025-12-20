// @ts-check
import { defineConfig } from "astro/config";

import reactI18next from "astro-react-i18next";

import tailwindcss from "@tailwindcss/vite";

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