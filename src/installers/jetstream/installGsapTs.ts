// ./src/installers/jetstream/installGsapTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateGsapTs from '../../generators/jetstream/generateGsapTs.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'gsap.ts', generateGsapTs() )

}
