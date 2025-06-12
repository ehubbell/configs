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
			entry: path.resolve(__dirname, 'index.js'),
			name: 'HTML',
			formats: ['cjs'],
			fileName: format => `index.${format}.js`,
		},
	},
	plugins: [pushBuild()],
	optimizeDeps: {
		include: [
			'@next/eslint-plugin-next',
			'@typescript-eslint/eslint-plugin',
			'@typescript-eslint/parser',
			'eslint-config-next',
			'eslint-config-prettier',
			'eslint-plugin-eqeqeq-fix',
			'eslint-plugin-prettier',
			'eslint-plugin-simple-import-sort',
			'eslint-plugin-unused-imports',
		],
	},
});
