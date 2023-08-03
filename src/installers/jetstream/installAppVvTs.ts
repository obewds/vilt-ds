// ./src/installers/jetstream/installAppVvTs.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateAppVvTs from '../../generators/jetstream/resources/js/generate-app-vv-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'app.vv.ts', generateAppVvTs() )

}
