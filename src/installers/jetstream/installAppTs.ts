// ./src/installers/jetstream/installAppTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateAppTs from '../../generators/jetstream/generateAppTs.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'app.ts', generateAppTs() )

}