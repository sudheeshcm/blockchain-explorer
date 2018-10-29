module.exports = {
  parser: 'babel-eslint',

  extends: ['airbnb', 'prettier', 'prettier/react'],

  plugins: ['prettier'],

  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
  },

  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],

    // Ignore our uppercased aliases
    'import/no-unresolved': ['warning', { ignore: ['^[A-Z]'] }],

    'import/extensions': ['js', 'jsx'],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': 'off',

    'jsx-a11y/interactive-supports-focus': 'off',

    'jsx-a11y/no-noninteractive-element-interactions': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',

    'jsx-a11y/no-static-element-interactions': 'off',

    'no-underscore-dangle': ['error', { allow: ['_errors'] }],

    'react/destructuring-assignment': [false, 'never'],

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'instance-variables',
          'state',
          'constructor',
          'lifecycle',
          'everything-else',
          'rendering',
        ],
        groups: {
          rendering: ['/^render+$/', 'render'],
        },
      },
    ],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',

    // custom rules
    'react/no-unescaped-entities': [true, { forbid: ['>', '"', "'", '}'] }],
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
      /* webpack: {
        config: path.join(__dirname, 'config/webpack/webpack.config.common.js'),
      }, */
    },
  },
};
