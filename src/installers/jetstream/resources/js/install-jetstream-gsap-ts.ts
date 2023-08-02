// ./src/installers/jetstream/resources/js/install-jetstream-gsap-ts.ts

import installWhenNoFile from '../../../../helpers/installWhenNoFile.js'
import generateJetstreamGsapTs from '../../../../generators/jetstream/resources/js/generate-jetstream-gsap-ts.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'gsap.ts', generateJetstreamGsapTs() )

}
