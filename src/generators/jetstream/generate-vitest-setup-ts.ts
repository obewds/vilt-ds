// ./src/generators/jetstream/generate-vitest-setup-ts.ts

export default function (): string {

return `// ./vitestSetup.ts

import { config } from '@vue/test-utils'
import Head from './VitestHeadMocked.vue'

config.global.components = {
    Head,
};
`;

}
