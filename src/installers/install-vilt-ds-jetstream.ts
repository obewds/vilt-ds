// ./src/installers/install-vilt-ds-jetstream.ts

import installFile from '../helpers/install-file.js'
import removeFile from '../helpers/remove-file.js'

// import client side deps and package scripts/mods for VILT DS and VueVentus
import installJetstreamNpmDeps from '../installers/dependencies/install-jetstream-npm-deps.js'
import installJetstreamPackageJsonMods from '../installers/dependencies/install-jetstream-package-json-mods.js'

// import the app gitignore file for VILT DS
import generateGitignore from '../generators/jetstream/generate-gitignore.js'

// import typescript specific app files
import generateAppColorsTypesTs from '../generators/jetstream/resources/js/Types/generate-app-colors-types-ts.js'
import generateAppJetstreamTypesTs from '../generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts.js'
import generateAppTypesTs from '../generators/jetstream/resources/js/Types/generate-app-types-ts.js'
import generateAppVvClassesTypesTs from '../generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts.js'
import generateTsconfigJson from '../generators/jetstream/generate-tsconfig-json.js'
import generateViteTsxDts from '../generators/jetstream/resources/js/generate-vite-tsx-d-ts.js'
import generateViteWindowDts from '../generators/jetstream/resources/js/generate-vite-window-d-ts.js'
import generateZiggyTs from '../generators/jetstream/resources/js/generate-ziggy-ts.js'

// import vue ecosystem app typed VILT DS files
import generateBootstrapTs from '../generators/jetstream/resources/js/generate-bootstrap-ts.js'

// import tailwind app typed files
import generateTailwindConfigTs from '../generators/jetstream/generate-tailwind-config-ts.js'
import generateAppTs from '../generators/jetstream/resources/js/generate-app-ts.js'
import generateViteConfigTs from '../generators/jetstream/generate-vite-config-ts.js'

// import VueVentus and VueVentus dependency app files
import viltDsDefaultColorPalette from '../data/colors/vilt-ds-default-tailwind-color-palette.js'
import generateAppVvTs from '../generators/jetstream/resources/js/generate-app-vv-ts.js'
import generateAppVvClassesTs from '../generators/jetstream/resources/js/generate-app-vv-classes-ts.js'
import generateJetstreamGsapTs from '../generators/jetstream/resources/js/generate-jetstream-gsap-ts.js'

// import laravel blade files
import generateAppBladePhp from '../generators/jetstream/resources/views/generate-app-blade-php.js'

// import laravel jetstream layout component files
import generateAppLayoutVue from '../generators/jetstream/resources/js/Layouts/generate-app-layout-vue.js'

// import laravel php files for VILT DS
import generateJetstreamPhp from '../generators/jetstream/config/generate-jetstream-php.js'
import generateWebPhp from '../generators/jetstream/routes/generate-web-php.js'

// import laravel and vueventus updatable files to be installed
import vueventus from '../updaters/vueventus.js'
import jetstreamBaseComponents from '../updaters/jetstream-base-components.js'
import jetstreamApi from '../updaters/jetstream-api.js'
import jetstreamAuth from '../updaters/jetstream-auth.js'
import jetstreamProfile from '../updaters/jetstream-profile.js'
import jetstreamTeams from '../updaters/jetstream-teams.js'
import jetstreamBasePages from '../updaters/jetstream-base-pages.js'

// import suggested VS Code Extensions for VILT DS
import viltDsVscodeExtensions from '../data/ide/vilt-ds-vscode-extensions.js'


export default function (): void {

    // install client side deps and package scripts/mods for VILT DS and VueVentus
    installJetstreamNpmDeps()
    installJetstreamPackageJsonMods()

    // update the app gitignore file for VILT DS
    installFile( '/.gitignore', generateGitignore() )

    // install typescript specific app files
    installFile( '/resources/js/Types/app-colors-types.ts', generateAppColorsTypesTs() )
    installFile( '/resources/js/Types/app-jetstream-types.ts', generateAppJetstreamTypesTs() )
    installFile( '/resources/js/Types/app-types.ts', generateAppTypesTs() )
    installFile( '/resources/js/Types/app-vv-classes-types.ts', generateAppVvClassesTypesTs() )
    installFile( '/tsconfig.json', generateTsconfigJson() )
    installFile( '/resources/js/vite-tsx.d.ts', generateViteTsxDts() )
    installFile( '/resources/js/vite-window.d.ts', generateViteWindowDts() )
    installFile( '/resources/js/ziggy.ts', generateZiggyTs() )

    // install vue ecosystem app typed VILT DS files
    installFile( '/resources/js/bootstrap.ts', generateBootstrapTs() )
    installFile( '/resources/js/app.ts', generateAppTs() )
    installFile( '/vite.config.ts', generateViteConfigTs() )

    // install tailwind app typed files
    installFile( '/tailwind.config.ts', generateTailwindConfigTs() )

    // install VueVentus and VueVentus dependency app files
    installFile( '/resources/js/app.colors.json', JSON.stringify(viltDsDefaultColorPalette, null, 4) )
    installFile( '/resources/js/app.vv.ts', generateAppVvTs() )
    installFile( '/resources/js/app.vv.classes.ts', generateAppVvClassesTs() )
    installFile( '/resources/js/gsap.ts', generateJetstreamGsapTs() )

    // install laravel blade files
    installFile( '/resources/views/app.blade.php', generateAppBladePhp() )

    // install laravel jetstream layout component files
    installFile( '/resources/js/Layouts/AppLayout.vue', generateAppLayoutVue() )

    // update laravel php files for VILT DS
    installFile( '/config/jetstream.php', generateJetstreamPhp() )
    installFile( '/routes/web.php', generateWebPhp() )

    // install laravel and vueventus updatable files
    vueventus()
    jetstreamBaseComponents()
    jetstreamApi()
    jetstreamAuth()
    jetstreamProfile()
    jetstreamTeams()
    jetstreamBasePages()

    // install suggested VS Code Extensions for VILT DS
    installFile( '/.vscode/extensions.json', JSON.stringify(viltDsVscodeExtensions, null, 4) )

    console.log(' ')

    // delete javascript files now replaced by typescript files
    removeFile( '/vite.config.js' )
    removeFile( '/tailwind.config.js' )
    removeFile( '/tailwind.config.js' )
    removeFile( '/resources/js/bootstrap.js' )
    removeFile( '/resources/js/app.js' )

}
