// ./src/generators/jetstream/vscode/generate-extensions-json.ts

import viltDsVscodeExtensions from '../../../data/ide/vilt-ds-vscode-extensions.js'

export default function (): string {

    return JSON.stringify(viltDsVscodeExtensions, null, 4)

}
