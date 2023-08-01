// ./src/installers/installViltDsJetstream.ts

import installVscodeExtensionsJson from '../installers/jetstream/installVscodeExtensionsJson.js'
import installNpmDeps from '../installers/jetstream/installNpmDeps.js'
import installTailwindConfigTs from '../installers/jetstream/installTailwindConfigTs.js'
import installViteConfigTs from '../installers/jetstream/installViteConfigTs.js'

import updateConfigJetstreamPhp from '../updaters/jetstream/updateConfigJetstreamPhp.js'
import updateGitignore from '../updaters/jetstream/updateGitignore.js'
import updatePackageJson from '../updaters/jetstream/updatePackageJson.js'
import updateRoutesWebPhp from '../updaters/jetstream/updateRoutesWebPhp.js'

export default function (): void {

    updateGitignore()

    installNpmDeps()

    installVscodeExtensionsJson()

    installTailwindConfigTs()

    installViteConfigTs()

    updateConfigJetstreamPhp()

    updateRoutesWebPhp()

    updatePackageJson()

}
