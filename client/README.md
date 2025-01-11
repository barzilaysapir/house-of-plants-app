# Getting Started with Vite React App

This project has been migrated to **Vite**, a fast build tool and dev server for modern web applications.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run start`

Runs the app in development mode using the `.env.local` environment variables.  
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits, and any lint errors will appear in the console.

### `npm run start-p`

Runs the app in development mode using the `.env` environment variables.  
This is useful for different environments or configurations, as it loads from the specified `.env` file.

### `npm run build`

First, TypeScript checks your project using `tsc`, ensuring there are no type errors. Then it builds the app for production into the `dist` folder using Vite.

It optimizes the build for the best performance. The output is minified, and filenames include content hashes.

Your app is now ready to be deployed!

### `npm run preview`

This command serves the production build (after running `npm run build`) on a local server.  
It's a good way to preview your production site locally before deploying.

## Environment Variables

Vite uses `.env` files for environment variables. Note that all environment variables need to be prefixed with `VITE_` to be exposed to the frontend.

- Example: `VITE_API_URL=https://example.com`

You can use `.env.local` for local development, `.env` for production or other environments, and `.env.*` for specific environments like `.env.staging`.

## Learn More

To learn more about Vite and React:

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)

For more details about managing environment variables and scripts, refer to Vite’s documentation.
