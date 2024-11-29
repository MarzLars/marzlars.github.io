const path = require('path');

module.exports = {
    distDir: 'out',
    exportTrailingSlash: true,
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
        }
      },
      // other configurations...
    webpack: (config, { isServer }) => {
        if (isServer) {
            const fs = require('fs');
            const outDir = path.resolve(__dirname, 'out');
            if (fs.existsSync(outDir)) {
                console.log('The ./out directory exists.');
                // Add your renaming logic here if needed
            } else {
                console.log('The ./out directory does not exist.');
                fs.mkdirSync(outDir);
                console.log('The ./out directory has been created.');
            }
        }
        return config;
    },
};
