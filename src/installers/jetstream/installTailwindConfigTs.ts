// ./src/installers/jetstream/installTailwindConfigTs.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import generateTailwindConfigTs from '../../generators/jetstream/generateTailwindConfigTs.js'

export default function (): void {

    installWhenNoFile( '/', 'tailwind.config.ts', generateTailwindConfigTs() )

}
