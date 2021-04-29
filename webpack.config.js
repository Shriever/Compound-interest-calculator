const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // entry point
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  output: {
    path: path.join(__dirname, "/dist"), // bundle output path
    filename: "index_bundle.js", // bundle name
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
};
