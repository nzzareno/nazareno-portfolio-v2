const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  },
  ...(typeof window === undefined
    ? { localePath: path.resolve('./public/locales') }
    : {}),

  trailingSlash: true
};
