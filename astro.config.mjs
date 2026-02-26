import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://example.com", // TODO: replace with your domain
  integrations: [sitemap()],
  image: {
    domains: ["cdn.simpleicons.org"],
  },
});
