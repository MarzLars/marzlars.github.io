const path = require('path');
const fs = require('fs');

module.exports = {
  distDir: 'out',
  assetPrefix: './',
  basePath: '',
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/experience': { page: '/experience' },
      '/projects': { page: '/projects' },
      '/404': { page: '/404' }
    };
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const outDir = path.resolve(__dirname, 'out');
      if (fs.existsSync(outDir)) {
        console.log('The ./out directory exists.');
      } else {
        console.error('The ./out directory does not exist.');
        fs.mkdirSync(outDir);
        console.log('The ./out directory has been created.');
      }
    }
    return config;
  },
};
