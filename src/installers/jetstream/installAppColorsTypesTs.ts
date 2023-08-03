// ./src/installers/jetstream/installAppColorsTypesTs.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateAppColorsTypesTs from '../../generators/jetstream/resources/js/Types/generate-app-colors-types-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/Types/', 'app-colors-types.ts', generateAppColorsTypesTs() )

}
