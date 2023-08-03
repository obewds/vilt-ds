// ./src/installers/jetstream/installAppTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateAppTs from '../../generators/jetstream/resources/js/generate-app-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'app.ts', generateAppTs() )

}
