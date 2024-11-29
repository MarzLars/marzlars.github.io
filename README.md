## Portfolio Website For Developers 💯

**UPDATE:**


1. Wrote a detailed blog on [freeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/), describing and explaining how I built this application from the ground up.

2. Included the `constants` folder, where you can directly add your details and it'll get reflected throughout the application. No more customizations for the template required, just add your data and it'll reflect immediately.

Portfolio for developers is a simple and minimalistic website to showcase your skills and projects as a developer. The design is inspired by [Kevin Clark](https://kevinclark.ca). The website is completely Open Source, you can use it for whatever purpose you want.

![HomeGif](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demo-images/websitegif.gif)

# Features

- Responsive layout, works well on both Mobile and Desktop
- Dark mode support. Click buttons to toggle dark mode and light mode.
- Clear React components and tailwind styling.
- Exact sections that a developer needs to showcase their skills.
- Clear call to actions.

# Pages

I've kept the pages as simple as possible. Only the required sections are included with minimal content.

## Landing

![Hompage](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demo-images/home.png)

## About

![Hompage](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demo-images/about.png)

## Projects

![Hompage](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demo-images/projects.png)

## Experience

![Hompage](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demo-images/experience.png)

## Contact

![Hompage](https://github.com/manuarora700/simple-developer-portfolio-website/blob/main/demo-images/contact.png)

# Tech Stack

The website is built in my favourite Tech Stack and deployed on [Vercel](https://vercel.com)

- [Next.js](https://nextjs.org) for building React Components.
- [tailwindcss](https://tailwindcss.com) for styling.
- [React Rough Notation](https://roughnotation.com) for Hero section highlighting.
- [Vercel](https://vercel.com) for deployments and CI/CD.

# Usage

- Clone the repository using `git clone https://github.com/manuarora700/simple-developer-portfolio-website.git`
- Install all the modules by using `npm i` or `npm install` or `yarn`
- Run the local development server by using `npm run dev` or `yarn dev`
- Make the required edits and deploy to YOUR GitHub repo for CI/CD.

# Deployment

Deployment can be done in 3 easy steps.

- Login to [Vercel](https://vercel.com) or signup for an account if you don't have one.
- Create a `New Project` and select YOUR GitHub repository of the portfolio project.
- Wait for Vercel to deploy your project to production.
- Ensure the `next export` step runs successfully to create the `./out` directory before the deployment step.

# Changes to GitHub Actions Workflow and Next.js Configuration

To resolve the 404 error on the GitHub Pages site, the following changes were made:

1. **GitHub Actions Workflow**:
   - The `next export` step in the workflow file `.github/workflows/nextjs.yml` was updated to include the `--outdir` flag with the value `./out`.
   - A step was added to move the contents of the `./out` directory to the `./docs` directory.

2. **Next.js Configuration**:
   - The `next.config.js` file was updated to include `trailingSlash: true` in the configuration object to ensure that all paths have a trailing slash.
   - An `exportPathMap` function was added to the configuration object to define custom paths for the exported files.

# License

This template is completely open source and free to use. Use it for client projects or your own portfolio project. Give me credits at the footer (If you wish, it'll help me a lot :)).

# Support

<a href="https://www.buymeacoffee.com/manuarora" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
