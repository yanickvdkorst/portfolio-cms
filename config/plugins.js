"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () { return ({}); });

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  'strapi-v5-plugin-populate-deep': {
    config: {
      defaultDepth: 3, // Default is 5
    },
  },
});

  