// ./src/installers/jetstream/installAppTypesTs.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateAppTypesTs from '../../generators/jetstream/resources/js/Types/generate-app-types-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/Types/', 'app-types.ts', generateAppTypesTs() )

}
