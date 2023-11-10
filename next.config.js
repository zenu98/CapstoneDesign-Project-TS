const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

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
