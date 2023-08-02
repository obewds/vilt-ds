// ./src/installers/jetstream/installAppJetstreamTypesTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateAppJetstreamTypesTs from '../../generators/jetstream/generateAppJetstreamTypesTs.js'

export default function (): void {

    installWhenNoFile( '/resources/js/Types/', 'app-jetstream-types.ts', generateAppJetstreamTypesTs() )

}
