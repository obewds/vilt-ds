// ./src/installers/jetstream/installAppVvClassesTs.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateAppVvClassesTs from '../../generators/jetstream/resources/js/generate-app-vv-classes-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'app.vv.classes.ts', generateAppVvClassesTs() )

}
