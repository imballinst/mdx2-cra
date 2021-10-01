module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);

      if (oneOfRule) {
        const { oneOf } = oneOfRule;

        oneOf.unshift({
          test: [/\.mdx$/],
          use: [{ loader: "babel-loader" }, { loader: "@mdx-js/loader" }],
        });
      }

      return webpackConfig;
    },
  },
};
