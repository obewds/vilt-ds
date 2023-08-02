// ./src/installers/jetstream/installVscodeExtensionsJson.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import viltDsVscodeExtensions from '../../data/ide/vilt-ds-vscode-extensions.js'

export default function (): void {

    installWhenNoFile( '/.vscode/', 'extensions.json', JSON.stringify(viltDsVscodeExtensions, null, 4) )

}
