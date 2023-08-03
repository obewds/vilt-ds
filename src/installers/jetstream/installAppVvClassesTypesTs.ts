// ./src/installers/jetstream/installAppVvClassesTypesTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateAppVvClassesTypesTs from '../../generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/Types/', 'app-vv-classes-types.ts', generateAppVvClassesTypesTs() )

}
