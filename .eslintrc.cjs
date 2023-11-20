module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends:
        [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:react-hooks/recommended',
            'plugin:storybook/recommended',
            'prettier'
        ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', {
            allowConstantExport: true
        }],

    },
    overrides: [
        {
            "files": "src/+(modules|screens|pages|data)/**/*.+(ts|tsx)",
            "rules": {
                "no-restricted-imports": [
                    "error",
                    {
                        "patterns": [
                            {
                                "group": ["react"],
                                "message": "Зависимость должна быть инвертирована через shared"
                            }
                        ]
                    }
                ]
            }
        }
    ]
};
