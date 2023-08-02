// ./src/generators/jetstream/generateViteConfigTs.ts

export default function (): string {

return `// ./vite.config.ts

import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.ts',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    // note this isn't really needed if not doing advanced work with ziggy routes
    resolve: {
        alias: {
            // ziggy: 'vendor/tightenco/ziggy/dist',
            ziggy: 'vendor/tightenco/ziggy/dist/vue.es.js', // if using the Vue plugin
        },
    },
})
`;

}
