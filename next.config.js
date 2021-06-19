const withTM = require("next-transpile-modules")([
  "unist-util-visit-parents",
  "unist-util-visit-children"
]);

module.exports = {
    target: "serverless",
    async rewrites() {
        return [
            {
                source: '/js/index.outbound-links.js',
                destination: 'https://plausible.io/js/plausible.outbound-links.js'
            },
            {
                source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
                destination: 'https://plausible.io/api/event'
            }
      ];
  },
}

module.exports = withTM({
  future: {
    webpack5: true, // if you want to use webpack 5
  },
});