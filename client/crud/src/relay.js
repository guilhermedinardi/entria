// relay.config.js
module.exports = {
    src: "./src",
    schema: "../../server/graphql/modules/posts/schema.graphql",
    exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  }