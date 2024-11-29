const path = require('path');
const fs = require('fs');

module.exports = {
  distDir: 'out',
  trailingSlash: true,
  assetPrefix: './',
  basePath: '',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/', query: { __nextDefaultLocale: 'en' } },
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
      const indexPath = path.join(outDir, 'server', 'pages', 'index.html');

      if (fs.existsSync(outDir)) {
        console.log('The ./out directory exists.');
      } else {
        console.error('The ./out directory does not exist.');
        fs.mkdirSync(outDir, { recursive: true });
        console.log('The ./out directory has been created.');
      }

      if (fs.existsSync(indexPath)) {
        console.log('The index.html file exists in the ./out/server/pages directory.');
      } else {
        console.error('The index.html file does not exist in the ./out/server/pages directory.');
        fs.mkdirSync(path.dirname(indexPath), { recursive: true });
        fs.writeFileSync(indexPath, `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MarzLars Portfolio</title>
    <link rel="stylesheet" href="styles/globals.css">
</head>
<body>
    <header>
        <h1>Welcome to MarzLars Portfolio</h1>
    </header>
    <main>
        <section>
            <h2>About Me</h2>
            <p>I'm a Full-Stack Developer with a passion for creating impactful web applications.</p>
        </section>
        <section>
            <h2>Projects</h2>
            <ul>
                <li><a href="https://tailwindmasterkit.com">Tailwind Master Kit</a></li>
                <li><a href="https://placeholdertech.in">PlaceholderTech</a></li>
                <li><a href="https://manuarora.in">Portfolio</a></li>
                <li><a href="https://covidrescue.co.in">CovidRescue</a></li>
                <li><a href="https://algochurn.com">Algochurn</a></li>
                <li><a href="https://play.placeholdertech.in">Playground</a></li>
                <li><a href="https://feedmeback.vercel.app">Feedmeback</a></li>
                <li><a href="https://devmedium.vercel.app">Devmedium</a></li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:lars_gustav@hotmail.com">lars_gustav@hotmail.com</a></p>
            <p>Phone: <a href="tel:+4748236442">+47 482 36 442</a></p>
            <p>Address: Levanger, Norway</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 MarzLars. All rights reserved.</p>
    </footer>
</body>
</html>
        `);
        console.log('The index.html file has been created in the ./out/server/pages directory.');
      }
    }
    return config;
  },
};
