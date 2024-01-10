/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [react()],
        build: {},

        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        test: {
            environment: 'jsdom',
            globals: true,
            exclude: [...configDefaults.exclude, 'tests/*'],
        },
    };
});
