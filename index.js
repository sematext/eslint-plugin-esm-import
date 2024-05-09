const { basename } = require('path');
const eslintResolve = require('eslint-module-utils/resolve').default;
const resolveImportType = require('eslint-plugin-import/lib/core/importType').default;

const defaultIndexFiles = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];
const defaultIgnoredExtensions = ['.js', '.cjs', '.json', '.css', '.scss'];

/** Checks whether the extension at the end of the provided path is in the "ignored extensions" list */
function isExtensionIgnored(path, ignoredExtensions) {
  const extension = path.substring(path.lastIndexOf('.'));
  return ignoredExtensions.includes(extension);
}

/** Checks whether the folder import was resolved to one of the index files */
function resolvedDirToIndex(importPath, resolvedPath, indexFiles) {
  try {
    return indexFiles.includes(basename(resolvedPath))
      && basename(importPath) !== 'index'; // in case 'index' was resolved to e.g. 'index.js'
  } catch (e) { return false; }
}

function rule(check) {
  return {
    meta: {
      fixable: true,
    },
    create(context) {
      function ruleInner(node) {
        const source = node.source;
        if (!source) return;
        const importType = resolveImportType(source.value, context);
        const value = source.value.replace(/\?.*$/, '');
        const ignored = context.settings['esm-import']?.ignore ?? defaultIgnoredExtensions;
        if (!value || importType === 'external' || isExtensionIgnored(value, ignored)) return;

        check(context, node, eslintResolve(value, context));
      }

      return {
        DeclareExportDeclaration: ruleInner,
        DeclareExportAllDeclaration: ruleInner,
        ExportAllDeclaration: ruleInner,
        ExportNamedDeclaration: ruleInner,
        ImportDeclaration: ruleInner,
      };
    },
  };
}

module.exports = {
  meta: {
    name: 'eslint-plugin-esm-import',
  },
  configs: {
    recommended: {
      plugins: ['esm-import'],
      rules: {
        'esm-import/extensions': 'error',
      },
    },
  },
  rules: {
    'extensions': rule((context, node, path) => {
      const value = node.source.value;
      if (path) {
        const indexFiles = context.settings['esm-import']?.index ?? defaultIndexFiles;
        let message;
        let fix;
        if (resolvedDirToIndex(value, path, indexFiles)) {
          message = 'Importing a directory requires /index.js'
          fix = value.includes('?') ? undefined : (fixer) => fixer.replaceText(node.source, `'${value}/index.js'`);
        } else {
          message = 'Local imports and exports must end with .js';
          // imports with query strings require manual fix for now
          fix = value.includes('?') ? undefined : (fixer) => fixer.replaceText(node.source, `'${value}.js'`);
        }
        context.report({
          node,
          message,
          fix,
        });
      }
    }),
  },
};
