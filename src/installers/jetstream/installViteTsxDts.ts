// ./src/installers/jetstream/installViteTsxDts.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateViteTsxDts from '../../generators/jetstream/generateViteTsxDts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'vite-tsx.d.ts', generateViteTsxDts() )

}
