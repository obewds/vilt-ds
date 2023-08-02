// ./src/installers/jetstream/installAppTypesTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateAppTypesTs from '../../generators/jetstream/generateAppTypesTs.js'

export default function (): void {

    installWhenNoFile( '/resources/js/Types/', 'app-types.ts', generateAppTypesTs() )

}
