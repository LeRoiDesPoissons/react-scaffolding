import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		tsconfigPaths(),
		TanStackRouterVite({
			target: 'react',
			autoCodeSplitting: true,
			quoteStyle: 'single',
			generatedRouteTree: 'src/globals/router/routeTree.gen.ts',
		}),
		react(),
	],
});
