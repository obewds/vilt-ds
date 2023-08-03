// ./src/installers/jetstream/installAppJetstreamTypesTs.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateAppJetstreamTypesTs from '../../generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/Types/', 'app-jetstream-types.ts', generateAppJetstreamTypesTs() )

}
