// ./src/installers/jetstream/installBootstrapTs.ts

import installWhenNoFile from '../../helpers/install-when-no-file.js'

import generateBootstrapTs from '../../generators/jetstream/resources/js/generate-bootstrap-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'bootstrap.ts', generateBootstrapTs() )

}
