import esmImport from 'eslint-plugin-esm-import';
import globals from 'globals';

export default [
  {
    plugins: {
      'esm-import': esmImport
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
      parserOptions: {
        ecmaVersion: 2024
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      ignore: ['node_modules'],
      'import/resolver': {
        node: {},
        webpack: {
          config: 'webpack.config.cjs',
          extensions: ['.ts', '.tsx', '.js']
        }
      },
      'esm-import': {
        ignore: ['.js', '.cjs', '.json', '.css', '.scss', '.svg', '.png', '.gif', '.mp3']
      }
    },
    rules: {
      ...esmImport.configs.recommended.rules
    }
  }
];
