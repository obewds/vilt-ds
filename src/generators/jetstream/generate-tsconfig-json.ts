// ./src/generators/jetstream/generate-tsconfig-json.ts

import viltDsTypescriptConfig from '../../data/typescript/vilt-ds-typescript-config.js'

export default function (): string {

    return JSON.stringify(viltDsTypescriptConfig, null, 4)

}
