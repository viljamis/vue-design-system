module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/tokens/tokens.scss";
            @import "@/assets/tokens/tokens.map.scss";
            @import "@/styles/styles.scss";
          `,
      },
    },
  },
}
