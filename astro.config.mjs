// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },

  server: {
    allowedHosts: true,
    host: true,
  },

  adapter: cloudflare(),
});