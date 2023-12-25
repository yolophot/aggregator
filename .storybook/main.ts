import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../packages/**/*.mdx',
        '../docs/**/*.mdx',
        '../packages/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-interactions'),
        getAbsolutePath('@storybook/addon-mdx-gfm'),
    ],
    staticDirs: ['./public'],
    framework: {
        name: getAbsolutePath('@storybook/nextjs'),
        options: {
            builder: {
                useSWC: true, // Enables SWC support
            },
        },
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

function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}
