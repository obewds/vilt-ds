// ./src/installers/jetstream/installViteTsxDts.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateViteTsxDts from '../../generators/jetstream/resources/js/generate-vite-tsx-d-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'vite-tsx.d.ts', generateViteTsxDts() )

}
