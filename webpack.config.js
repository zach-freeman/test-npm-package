const path = require("path");

const myFirstConfig = {
  mode: "production",
  entry: {
    main: "./src/index.tsx",
    vendor: "./src/test.tsx",
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};

module.exports = myFirstConfig;
