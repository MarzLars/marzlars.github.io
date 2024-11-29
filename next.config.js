const fs = require('fs');
const path = require('path');

module.exports = {
    distDir: 'out',
    exportTrailingSlash: true,
    assetPrefix: './',
    basePath: '',
      // other configurations...
    webpack: (config, { isServer }) => {
        if (!isServer) {
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
