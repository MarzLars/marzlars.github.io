import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import fs from 'fs';
import path from 'path';

function MyApp({ Component, pageProps }) {
  // P4cbb
  const pagesManifestPath = path.join(process.cwd(), 'out', 'server', 'pages-manifest.json');
  if (!fs.existsSync(pagesManifestPath)) {
    // P3d76
    console.error(`Error: Cannot find module '${pagesManifestPath}'`);
  }

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
