import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../packages/**/*.mdx',
        '../docs/**/*.mdx',
        '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    staticDirs: ['./public'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    typescript: {
        check: true,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            skipChildrenPropWithoutDoc: false,
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
                // не добавляет в сгенерированное API для пропсов стандартные типы из react (Html атрибуты и тп)
                // если в declarations один элемент и он из @types/react, то это стандартный атрибут
                if (
                    prop?.declarations?.length === 1 &&
                    prop?.declarations[0]?.fileName.includes('node_modules/@types/react')
                ) {
                    return false;
                }

                return true;
            },
        },
    },
};
export default config;
