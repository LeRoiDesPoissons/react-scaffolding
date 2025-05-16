import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactQuery from '@tanstack/eslint-plugin-query';
import reactRedux from 'eslint-plugin-react-redux';
import importSort from 'eslint-plugin-import';
import eslintPlugin from 'eslint-plugin-prettier/recommended';
import vitest from '@vitest/eslint-plugin';

export default tseslint.config(
	eslintPlugin,
	...reactQuery.configs['flat/recommended'],
	{
		ignores: ['dist', 'routeTree.gen.ts'],
	},
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'react-redux': reactRedux.configs.recommended.plugins,
			import: importSort,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			...reactRedux.rules.recommended,
			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true,
				},
			],
			'import/order': [
				'error',
				{
					groups: [
						'external',
						'builtin',
						'internal',
						'sibling',
						'parent',
						'index',
					],
				},
			],
		},
	},
	{
		files: ['**/*.test.ts', '**/*.test.tsx'],
		plugins: {
			vitest,
		},
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/max-nested-describe': ['error', { max: 2 }],
		},
	},
);
