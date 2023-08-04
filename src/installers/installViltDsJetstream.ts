// ./src/installers/installViltDsJetstream.ts

import installFile from '../helpers/install-file.js'

import generateJetstreamPhp from '../generators/jetstream/config/generate-jetstream-php.js'

import viltDsDefaultColorPalette from '../data/colors/vilt-ds-default-tailwind-color-palette.js'





import installAppBladePhp from './jetstream/resources/views/install-app-blade-php.js'
import installJetstreamGsapTs from './jetstream/resources/js/install-jetstream-gsap-ts.js'


import installAppColorsTypesTs from '../installers/jetstream/installAppColorsTypesTs.js'
import installAppJetstreamTypesTs from '../installers/jetstream/installAppJetstreamTypesTs.js'
import installAppTs from '../installers/jetstream/installAppTs.js'
import installAppTypesTs from '../installers/jetstream/installAppTypesTs.js'
import installAppVvClassesTs from '../installers/jetstream/installAppVvClassesTs.js'
import installAppVvClassesTypesTs from '../installers/jetstream/installAppVvClassesTypesTs.js'
import installAppVvTs from '../installers/jetstream/installAppVvTs.js'
import installBootstrapTs from '../installers/jetstream/installBootstrapTs.js'
import installNpmDeps from '../installers/jetstream/installNpmDeps.js'
import installTailwindConfigTs from '../installers/jetstream/installTailwindConfigTs.js'
import installTsconfigJson from '../installers/jetstream/installTsconfigJson.js'
import installViteConfigTs from '../installers/jetstream/installViteConfigTs.js'
import installViteTsxDts from '../installers/jetstream/installViteTsxDts.js'
import installViteWindowDts from '../installers/jetstream/installViteWindowDts.js'
import installVscodeExtensionsJson from '../installers/jetstream/installVscodeExtensionsJson.js'

import updateGitignore from '../updaters/jetstream/updateGitignore.js'
import updatePackageJson from '../updaters/jetstream/updatePackageJson.js'
import updateRoutesWebPhp from '../updaters/jetstream/updateRoutesWebPhp.js'




export default function (): void {

    // update the app gitignore file for VILT DS
    updateGitignore()

    // install client side deps for VILT DS / VueVentus
    installNpmDeps()

    // install typescript specific app files
    installAppColorsTypesTs()
    installAppJetstreamTypesTs()
    installAppTypesTs()
    installAppVvClassesTypesTs()
    installTsconfigJson()
    installViteTsxDts()
    installViteWindowDts()

    // install vue ecosystem app typed VILT DS files
    installBootstrapTs()
    installAppTs()
    installAppVvTs()
    installViteConfigTs()

    // install tailwind app typed files
    installTailwindConfigTs()

    // install VueVentus and VueVentus dependency app files
    installFile( '/resources/js/app.colors.json', JSON.stringify(viltDsDefaultColorPalette, null, 4) )
    installAppVvClassesTs()
    installJetstreamGsapTs()

    // install laravel blade files
    installAppBladePhp()

    // update laravel php files for VILT DS
    installFile( '/config/jetstream.php', generateJetstreamPhp() )
    updateRoutesWebPhp()

    // update the project package json file
    updatePackageJson()

    // install suggested VS Code Extensions for VILT DS
    installVscodeExtensionsJson()

}
