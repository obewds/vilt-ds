// ./src/installers/jetstream/installViteConfigTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateViteConfigTs from '../../generators/jetstream/generateViteConfigTs.js'

export default function (): void {

    installWhenNoFile( '/', 'vite.config.ts', generateViteConfigTs() )

}
