import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import path from 'path';

function MyApp({ Component, pageProps }) {
  if (typeof window === 'undefined') {
    const fs = require('fs');
    const pagesManifestPath = path.join(process.cwd(), 'out', 'server', 'pages-manifest.json');
    if (!fs.existsSync(pagesManifestPath)) {
      console.error(`Error: Cannot find module '${pagesManifestPath}'`);
    }
  }

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;