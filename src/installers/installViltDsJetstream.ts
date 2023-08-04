// ./src/installers/installViltDsJetstream.ts

import installFile from '../helpers/install-file.js'

import generateAppBladePhp from '../generators/jetstream/resources/views/generate-app-blade-php.js'
import generateAppColorsTypesTs from '../generators/jetstream/resources/js/Types/generate-app-colors-types-ts.js'
import generateAppJetstreamTypesTs from '../generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts.js'
import generateAppTs from '../generators/jetstream/resources/js/generate-app-ts.js'
import generateAppTypesTs from '../generators/jetstream/resources/js/Types/generate-app-types-ts.js'
import generateAppVvClassesTs from '../generators/jetstream/resources/js/generate-app-vv-classes-ts.js'
import generateAppVvClassesTypesTs from '../generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts.js'
import generateBootstrapTs from '../generators/jetstream/resources/js/generate-bootstrap-ts.js'
import generateJetstreamGsapTs from '../generators/jetstream/resources/js/generate-jetstream-gsap-ts.js'
import generateJetstreamPhp from '../generators/jetstream/config/generate-jetstream-php.js'
import generateTailwindConfigTs from '../generators/jetstream/generate-tailwind-config-ts.js'
import generateTsconfigJson from '../generators/jetstream/generate-tsconfig-json.js'

import viltDsDefaultColorPalette from '../data/colors/vilt-ds-default-tailwind-color-palette.js'

import installJetstreamNpmDeps from '../installers/dependencies/install-jetstream-npm-deps.js'



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
    installJetstreamNpmDeps()

    // install typescript specific app files
    installFile( '/resources/js/Types/app-colors-types.ts', generateAppColorsTypesTs() )
    installFile( '/resources/js/Types/app-jetstream-types.ts', generateAppJetstreamTypesTs() )
    installFile( '/resources/js/Types/app-types.ts', generateAppTypesTs() )
    installFile( '/resources/js/Types/app-vv-classes-types.ts', generateAppVvClassesTypesTs() )
    installFile( '/tsconfig.json', generateTsconfigJson() )
    installViteTsxDts()
    installViteWindowDts()

    // install vue ecosystem app typed VILT DS files
    installFile( '/resources/js/bootstrap.ts', generateBootstrapTs() )
    installFile( '/resources/js/app.ts', generateAppTs() )
    installViteConfigTs()

    // install tailwind app typed files
    installFile( '/tailwind.config.ts', generateTailwindConfigTs() )

    // install VueVentus and VueVentus dependency app files
    installFile( '/resources/js/app.colors.json', JSON.stringify(viltDsDefaultColorPalette, null, 4) )
    installFile( '/resources/js/app.vv.classes.ts', generateAppVvClassesTs() )
    installFile( '/resources/js/gsap.ts', generateJetstreamGsapTs() )

    // install laravel blade files
    installFile( '/resources/views/app.blade.php', generateAppBladePhp() )

    // update laravel php files for VILT DS
    installFile( '/config/jetstream.php', generateJetstreamPhp() )
    updateRoutesWebPhp()

    // update the project package json file
    updatePackageJson()

    // install suggested VS Code Extensions for VILT DS
    installVscodeExtensionsJson()

}
