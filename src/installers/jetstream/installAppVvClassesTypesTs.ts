// ./src/installers/jetstream/installAppVvClassesTypesTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateAppVvClassesTypesTs from '../../generators/jetstream/generateAppVvClassesTypesTs.js'

export default function (): void {

    installWhenNoFile( '/resources/js/Types/', 'app-vv-classes-types.ts', generateAppVvClassesTypesTs() )

}
