import plugin_gridsome_plugin_tailwindcss_6 from "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_7 from "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_6,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelistPatternsChildren":[{}],"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{}]},"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"presetEnvConfig":{"stage":0,"autoprefixer":false}}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_7,
    options: {"id":"XX-999999999-9"}
  }
]
