# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to Vercel

Quick steps to deploy this Vite app to Vercel:

1. Sign in to Vercel and click "New Project".
2. Import the repository and, when prompted for settings, set:
	- Root Directory: `to-do`
	- Framework Preset: `Other` (or `Vite` if available)
	- Build Command: `npm run build`
	- Output Directory: `dist`
	- Install Command: `npm install`
    
3. Alternatively, you can deploy with the Vercel CLI from the repository root:

```powershell
# from the repository root
cd to-do; npm install; vercel --prod
```

This repo includes a `vercel.json` in the `to-do` folder which tells Vercel to run `npm run build` and serve the `dist` directory. If you change the build output, update `vercel.json` accordingly.
