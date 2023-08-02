// ./src/installers/jetstream/installAppVvTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateAppVvTs from '../../generators/jetstream/generateAppVvTs.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'app.vv.ts', generateAppVvTs() )

}
