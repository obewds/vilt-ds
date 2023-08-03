// ./src/installers/jetstream/installViteWindowDts.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateViteWindowDts from '../../generators/jetstream/generateViteWindowDts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'vite-window.d.ts', generateViteWindowDts() )

}
