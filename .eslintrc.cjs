const noParentImport = {
	group: ['../*'],
	message: 'Do not use parent imports',
};

const projectPaths = ['./tsconfig.renderer.json', './tsconfig.main.json'];

/** @type {import('eslint').Linter.Config} */
const config = {
	env: {
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/strict-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'prettier',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:import/electron',
	],
	plugins: ['import', 'unused-imports', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: projectPaths,
	},
	settings: {
		'import/resolver': {
			typescript: true,
			projectPaths,
		},
	},
	rules: {
		'array-callback-return': ['warn', { checkForEach: true }],
		curly: ['warn', 'multi-or-nest', 'consistent'],
		'default-case-last': 'warn',
		eqeqeq: 'error',
		'func-names': ['warn', 'never'],
		'func-style': 'warn',
		'guard-for-in': 'warn',
		indent: 'off',
		'logical-assignment-operators': 'warn',
		'max-depth': ['warn', { max: 7 }],
		'max-lines': ['warn', 1000],
		'max-params': ['warn', 5],
		'new-cap': 'warn',
		'no-alert': 'warn',
		'no-bitwise': 'warn',
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'no-constructor-return': 'warn',
		'no-else-return': ['warn', { allowElseIf: false }],
		'no-extend-native': 'warn',
		'no-extra-label': 'warn',
		'no-floating-decimal': 'warn',
		'no-implicit-coercion': ['warn', { disallowTemplateShorthand: true }],
		'no-label-var': 'warn',
		'no-labels': ['warn', { allowLoop: true, allowSwitch: true }],
		'no-lone-blocks': 'warn',
		'no-lonely-if': 'warn',
		'no-multi-assign': 'warn',
		'no-multi-str': 'warn',
		'no-new': 'warn',
		'no-new-object': 'warn',
		'no-new-wrappers': 'warn',
		'no-octal-escape': 'warn',
		'no-param-reassign': 'warn',
		'no-promise-executor-return': 'warn',
		'no-restricted-imports': [
			'error',
			{
				patterns: [noParentImport],
			},
		],
		'no-restricted-syntax': [
			'error',
			{
				message: "Don't declare enums. Use POJO with as const instead",
				selector: 'TSEnumDeclaration',
			},
		],
		'no-return-assign': 'warn',
		'no-self-compare': 'warn',
		'no-sequences': 'warn',
		'no-template-curly-in-string': 'warn',
		'no-unmodified-loop-condition': 'warn',
		'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
		'no-unreachable-loop': 'warn',
		'no-unused-vars': 'off',
		'no-useless-computed-key': ['warn', { enforceForClassMembers: true }],
		'no-useless-concat': 'warn',
		'no-useless-rename': 'warn',
		'no-useless-return': 'warn',
		'object-shorthand': ['warn', 'always'],
		'one-var': ['warn', 'never'],
		'operator-assignment': 'warn',
		'prefer-arrow-callback': 'warn',
		'prefer-exponentiation-operator': 'warn',
		'prefer-numeric-literals': 'warn',
		'prefer-object-has-own': 'warn',
		'prefer-object-spread': 'warn',
		'prefer-promise-reject-errors': 'warn',
		'prefer-regex-literals': ['warn', { disallowRedundantWrapping: true }],
		'prefer-template': 'warn',
		'require-unicode-regexp': 'warn',
		yoda: 'warn',

		'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
		'import/extensions': [
			'warn',
			'never',
			{ helpers: 'always', json: 'always', styles: 'always', test: 'always' },
		],
		'import/first': 'warn',
		'import/newline-after-import': 'warn',
		'import/no-commonjs': 'warn',
		'import/no-default-export': 'warn',
		'import/no-deprecated': 'off',
		'import/namespace': 'off',
		'import/no-duplicates': 'warn',
		'import/export': 'off',
		'import/no-empty-named-blocks': 'warn',
		'import/no-self-import': 'warn',
		'import/no-useless-path-segments': 'warn',
		'import/order': [
			'warn',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'sibling',
					'index',
					'parent',
					'type',
				],
				'newlines-between': 'always',
			},
		],
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrors: 'all',
				destructuredArrayIgnorePattern: '^_',
			},
		],

		'@typescript-eslint/consistent-type-exports': 'warn',
		'@typescript-eslint/consistent-type-imports': 'warn',
		'@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
		'@typescript-eslint/default-param-last': 'warn',
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'warn',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-loop-func': 'warn',
		'@typescript-eslint/no-misused-promises': [
			'warn',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-redundant-type-constituents': 'warn',
		'@typescript-eslint/no-shadow': 'warn',
		'no-constant-condition': 'off',
		'@typescript-eslint/no-unnecessary-condition': [
			'warn',
			{ allowConstantLoopConditions: true },
		],
		'@typescript-eslint/no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				enforceForJSX: true,
			},
		],
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': 'warn',
		'@typescript-eslint/no-useless-empty-export': 'warn',
		'@typescript-eslint/non-nullable-type-assertion-style': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/prefer-reduce-type-parameter': 'off',
		'@typescript-eslint/no-invalid-void-type': 'off',
		'@typescript-eslint/promise-function-async': 'warn',
		'@typescript-eslint/require-array-sort-compare': [
			'warn',
			{ ignoreStringArrays: true },
		],
		'@typescript-eslint/return-await': 'warn',
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'@typescript-eslint/restrict-template-expressions': [
			'warn',
			{ allowAny: true },
		],
		'@typescript-eslint/ban-types': [
			'warn',
			{
				types: {
					'{}': false,
					extendDefaults: true,
				},
			},
		],
		'@typescript-eslint/no-namespace': ['warn', { allowDeclarations: true }],
	},
	overrides: [
		{
			files: ['**/*.tsx', '**/*.jsx'],
			extends: [
				'plugin:react/recommended',
				'plugin:react/jsx-runtime',
				'plugin:react-hooks/recommended',
				'plugin:jsx-a11y/recommended',
			],
			plugins: ['jsx-expressions'],
			settings: {
				react: {
					version: 'detect',
				},
			},
			rules: {
				'@typescript-eslint/no-unnecessary-type-constraint': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'react/jsx-filename-extension': [
					'warn',
					{ extensions: ['jsx', 'tsx'] },
				],
				'react/jsx-fragments': 'warn',
				'react/jsx-max-depth': ['warn', { max: 6 }],
				'react/jsx-no-constructed-context-values': 'warn',
				'react/jsx-no-script-url': 'warn',
				'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
				'react/jsx-sort-props': [
					'warn',
					{
						noSortAlphabetically: true,
						multiline: 'last',
						callbacksLast: true,
						reservedFirst: true,
						shorthandLast: true,
					},
				],
				'react/jsx-wrap-multilines': 'warn',
				'react/no-access-state-in-setstate': 'warn',
				'react/no-danger': 'warn',
				'react/no-object-type-as-default-prop': 'warn',
				'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
				'react/self-closing-comp': 'warn',
				'react/void-dom-elements-no-children': 'warn',
				'react/prop-types': 'off',
				'jsx-expressions/strict-logical-expressions': 'warn',
			},
		},
		{
			files: ['*.test.ts'],
			extends: ['plugin:vitest/all', 'plugin:testing-library/react'],
			plugins: ['vitest', 'testing-library'],
			rules: {
				'vitest/prefer-expect-assertions': 'off',
				'vitest/require-top-level-describe': 'off',
				'vitest/max-expects': ['error', { max: 10 }],
				'testing-library/no-manual-cleanup': 'warn',
				'testing-library/no-global-regexp-flag-in-query': 'warn',
				'testing-library/prefer-explicit-assert': [
					'error',
					{ assertion: 'toBeInTheDocument' },
				],
				'testing-library/prefer-user-event': 'warn',
				'testing-library/prefer-wait-for': 'warn',
			},
		},
		{
			files: ['**/*'],
			excludedFiles: ['src/**/*'],
			env: {
				es2021: true,
				node: true,
			},
			rules: {
				'import/no-nodejs-modules': 'off',
			},
		},
		{
			files: ['./src/renderer/**/*'],
			env: {
				es2021: true,
				browser: true,
			},
			rules: {
				'import/no-nodejs-modules': 'error',
				'no-restricted-imports': [
					'error',
					{
						patterns: [
							noParentImport,
							{
								group: ['electron/*', 'serialport/*'],
								message: 'Not available in the renderer',
							},
						],
					},
				],
			},
		},
		{
			files: ['./src/electron/**/*', './src/preload/**/*'],
			env: {
				es2021: true,
				node: true,
			},
			rules: {
				'no-restricted-imports': [
					'error',
					{
						patterns: [
							noParentImport,
							{
								group: ['@renderer/*'],
								message: 'Do not use app modules in electron',
							},
						],
						paths: [
							{
								name: 'electron',
								importNames: ['ipcRenderer', 'ipcMain'],
								message: 'Please import ipc helper from `@shared/ipc-spec`.',
							},
						],
					},
				],
			},
		},
		{
			files: ['**/*.cjs', '**/*.js'],
			rules: {
				'import/no-commonjs': 'off',
			},
		},
	],
};

module.exports = config;
