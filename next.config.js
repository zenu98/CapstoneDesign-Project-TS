const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});
const nextconfig = {};
module.exports = withBundleAnalyzer(nextconfig);
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Seo",
        mongodb_password: "5GexqTGPY0cnBGfP",
        mongodb_clustername: "cluster0",
        mongodb_database: "post",
      },
    };
  }
  return {
    env: {
      mongodb_username: "Seo",
      mongodb_password: "5GexqTGPY0cnBGfP",
      mongodb_clustername: "cluster0",
      mongodb_database: "post",
    },
  };
};
