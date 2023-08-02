// ./src/installers/installViltDsJetstream.ts

import installAppColorsJson from '../installers/jetstream/installAppColorsJson.js'

import installAppColorsTypesTs from '../installers/jetstream/installAppColorsTypesTs.js'
import installAppJetstreamTypesTs from '../installers/jetstream/installAppJetstreamTypesTs.js'
import installAppTypesTs from '../installers/jetstream/installAppTypesTs.js'
import installAppVvClassesTypesTs from '../installers/jetstream/installAppVvClassesTypesTs.js'
import installVscodeExtensionsJson from '../installers/jetstream/installVscodeExtensionsJson.js'
import installNpmDeps from '../installers/jetstream/installNpmDeps.js'
import installTailwindConfigTs from '../installers/jetstream/installTailwindConfigTs.js'
import installTsconfigJson from '../installers/jetstream/installTsconfigJson.js'
import installViteConfigTs from '../installers/jetstream/installViteConfigTs.js'

import updateAppBladePhp from '../updaters/jetstream/updateAppBladePhp.js'
import updateConfigJetstreamPhp from '../updaters/jetstream/updateConfigJetstreamPhp.js'
import updateGitignore from '../updaters/jetstream/updateGitignore.js'
import updatePackageJson from '../updaters/jetstream/updatePackageJson.js'
import updateRoutesWebPhp from '../updaters/jetstream/updateRoutesWebPhp.js'

export default function (): void {

    updateGitignore()

    installNpmDeps()

    installVscodeExtensionsJson()

    installTsconfigJson()

    installAppColorsTypesTs()
    
    installAppJetstreamTypesTs()

    installAppTypesTs()

    installAppVvClassesTypesTs()

    installAppColorsJson()

    installTailwindConfigTs()

    installViteConfigTs()

    updateAppBladePhp()

    updateConfigJetstreamPhp()

    updateRoutesWebPhp()

    updatePackageJson()

}
