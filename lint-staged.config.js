module.exports = {
    'packages/ui-kit/**/*.{js,jsx,ts,tsx}': [
        'npm run lint --workspace=packages/ui-kit',
        () => 'npm run lint:types --workspace=packages/ui-kit',
    ],
};
