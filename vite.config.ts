/// <reference types="vitest" />
import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
    return {
        plugins: [react()],
        build: {},

        server: {
            host: true,
            port: 8000,
            watch: {
                usePolling: true,
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        test: {
            globals: true,
        },
        define: {
            __API__: mode === 'development' ? JSON.stringify('http://localhost:9999') : 'true', // TODO,
        },
    };
});
