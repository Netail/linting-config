module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier'
    ],
    rules: {
        'indent': ['error', 2],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'camelcase': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'semi': ['error', 'always'],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-duplicate-imports': 'error',
        'prettier/prettier': 'error',
    },
}
