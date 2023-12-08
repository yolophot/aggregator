/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 8000,
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            '@pet': '/src',
        },
    },
    test: {
        globals: true,
    },
});
