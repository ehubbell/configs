import { exec } from 'node:child_process';
import path from 'path';
import { defineConfig } from 'vite';

export function pushBuild() {
	return {
		name: 'push-build',
		closeBundle: async () => {
			exec('npx yalc push', (response, error) => (error ? console.error(error) : null));
		},
	};
}

export default defineConfig({
	base: './',
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			name: 'HTML',
			formats: ['es', 'cjs'],
			fileName: format => `index.${format}.js`,
		},
	},
	plugins: [pushBuild()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
			components: path.resolve(__dirname, '/src/components'),
			styles: path.resolve(__dirname, '/src/styles'),
			types: path.resolve(__dirname, '/src/types'),
			utils: path.resolve(__dirname, '/src/utils'),
		},
	},
});
