// ./src/generators/jetstream/generate-vitest-config-ts.ts

export default function (): string {

return `// ./vitest.config.ts

import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [
        vue()
    ],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: ['./vitestSetup.ts', './vitestZiggyRouteShim.d.ts'],
        exclude: [...configDefaults.exclude],
        include: ['./tests/Vitest/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        coverage: {
            all: false,
            provider: 'v8', // or 'istanbul'
        },
    },
}
`;

}
