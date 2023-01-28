export default {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'eslint-comments/no-use': 'off',
        'import/no-namespace': 'off',
        'no-unused-vars': 'off',
        'camelcase': 'off',
        'no-shadow': 'off',
        'semi': ['error', 'always'],
        'prettier/prettier': 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'no-duplicate-imports': 'error',
    },
}
