module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    root: true,
    env: { node: true, es6: true },
    extends: ['eslint:recommended'],
    overrides: [
        {
            files: ['src/**/*.{ts,tsx}'],
            env: { browser: true, es6: true },
            extends: [
                'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
                'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
                'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
            ],
            rules: {
                // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
                // e.g. "@typescript-eslint/explicit-function-return-type": "off",
                'react/self-closing-comp': [
                    'error',
                    {
                        component: true,
                        html: true,
                    },
                ],
                'sort-imports': [
                    'error',
                    {
                        ignoreCase: false,
                        ignoreDeclarationSort: true,
                        ignoreMemberSort: true,
                        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                        allowSeparatedGroups: true,
                    },
                ],
            },
        },
    ],
}
