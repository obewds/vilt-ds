// ./src/generators/jetstream/generate-vitest-setup-ts.ts
export default function () {
    return `// ./vitestSetup.ts

import { config } from '@vue/test-utils'
import Head from './VitestHeadMocked.vue'

config.global.components = {
    Head,
};
`;
}
//# sourceMappingURL=generate-vitest-setup-ts.js.map