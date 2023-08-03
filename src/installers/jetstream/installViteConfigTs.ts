// ./src/installers/jetstream/installViteConfigTs.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateViteConfigTs from '../../generators/jetstream/generate-vite-config-ts.js'

export default function (): void {

    installWhenNoFile( '/', 'vite.config.ts', generateViteConfigTs() )

}
