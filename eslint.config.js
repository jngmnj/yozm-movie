import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const patchedImportPlugin = fixupPluginRules(eslintPluginImport);
const patchedReactHooksPlugin = fixupPluginRules(reactHooks);

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': patchedReactHooksPlugin,
      'react-refresh': reactRefresh,
      react: eslintPluginReact,
      'jsx-a11y': jsxA11y,
      import: patchedImportPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...patchedReactHooksPlugin.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...patchedImportPlugin.configs.recommended.rules,

      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx'] }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-var': 'warn',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
          useTabs: false,
        },
      ],

      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@components', './src/components'],
            ['@data', './src/data'],
            ['@pages', './src/pages'],
            ['@assets', './src/assets'],
            ['@hooks', './src/hooks'],
            ['@utils', './src/utils'],
            ['@api', './src/api'],
            ['@store', './src/store'],
            ['@constants', './src/constants'],
            ['@supabaseJS', './src/supabase'],
          ],
          extensions: ['.js', '.jsx'],
        },
      },
    },
  },
];
