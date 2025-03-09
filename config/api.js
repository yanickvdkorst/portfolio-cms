// filepath: /Users/yanickvanderkorst/Documents/portfolio-cms/portfolio-cms/config/api.js
module.exports = ({ env }) => ({
    rest: {
      defaultLimit: 100,
      maxLimit: 250,
      withCount: true,
    },
  });