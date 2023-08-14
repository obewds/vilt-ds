// ./src/installers/install-vilt-ds-jetstream.ts
import installFile from '../helpers/install-file.js';
import viltDsDefaultColorPalette from '../data/colors/vilt-ds-default-tailwind-color-palette.js';
import viltDsVscodeExtensions from '../data/ide/vilt-ds-vscode-extensions.js';
import installJetstreamNpmDeps from '../installers/dependencies/install-jetstream-npm-deps.js';
import installJetstreamPackageJsonMods from '../installers/dependencies/install-jetstream-package-json-mods.js';
import generateAppBladePhp from '../generators/jetstream/resources/views/generate-app-blade-php.js';
import generateAppColorsTypesTs from '../generators/jetstream/resources/js/Types/generate-app-colors-types-ts.js';
import generateAppJetstreamTypesTs from '../generators/jetstream/resources/js/Types/generate-app-jetstream-types-ts.js';
import generateAppLayoutVue from '../generators/jetstream/resources/js/Layouts/generate-app-layout-vue.js';
import generateAppTs from '../generators/jetstream/resources/js/generate-app-ts.js';
import generateAppTypesTs from '../generators/jetstream/resources/js/Types/generate-app-types-ts.js';
import generateAppVvClassesTs from '../generators/jetstream/resources/js/generate-app-vv-classes-ts.js';
import generateAppVvClassesTypesTs from '../generators/jetstream/resources/js/Types/generate-app-vv-classes-types-ts.js';
import generateBootstrapTs from '../generators/jetstream/resources/js/generate-bootstrap-ts.js';
import generateGitignore from '../generators/jetstream/generate-gitignore.js';
import generateJetstreamGsapTs from '../generators/jetstream/resources/js/generate-jetstream-gsap-ts.js';
import generateJetstreamPhp from '../generators/jetstream/config/generate-jetstream-php.js';
import generateTailwindConfigTs from '../generators/jetstream/generate-tailwind-config-ts.js';
import generateTsconfigJson from '../generators/jetstream/generate-tsconfig-json.js';
import generateViteConfigTs from '../generators/jetstream/generate-vite-config-ts.js';
import generateViteTsxDts from '../generators/jetstream/resources/js/generate-vite-tsx-d-ts.js';
import generateViteWindowDts from '../generators/jetstream/resources/js/generate-vite-window-d-ts.js';
import generateWebPhp from '../generators/jetstream/routes/generate-web-php.js';
import generateActionMessageVue from '../generators/jetstream/resources/js/Components/generate-action-message-vue.js';
import generateActionSectionVue from '../generators/jetstream/resources/js/Components/generate-action-section-vue.js';
import generateApplicationLogoVue from '../generators/jetstream/resources/js/Components/generate-application-logo-vue.js';
import generateApplicationMarkVue from '../generators/jetstream/resources/js/Components/generate-application-mark-vue.js';
export default function () {
    // install client side deps and package scripts/mods for VILT DS and VueVentus
    installJetstreamNpmDeps();
    installJetstreamPackageJsonMods();
    // update the app gitignore file for VILT DS
    installFile('/.gitignore', generateGitignore());
    // install typescript specific app files
    installFile('/resources/js/Types/app-colors-types.ts', generateAppColorsTypesTs());
    installFile('/resources/js/Types/app-jetstream-types.ts', generateAppJetstreamTypesTs());
    installFile('/resources/js/Types/app-types.ts', generateAppTypesTs());
    installFile('/resources/js/Types/app-vv-classes-types.ts', generateAppVvClassesTypesTs());
    installFile('/tsconfig.json', generateTsconfigJson());
    installFile('/resources/js/vite-tsx.d.ts', generateViteTsxDts());
    installFile('/resources/js/vite-window.d.ts', generateViteWindowDts());
    // install vue ecosystem app typed VILT DS files
    installFile('/resources/js/bootstrap.ts', generateBootstrapTs());
    installFile('/resources/js/app.ts', generateAppTs());
    installFile('/vite.config.ts', generateViteConfigTs());
    // install tailwind app typed files
    installFile('/tailwind.config.ts', generateTailwindConfigTs());
    // install VueVentus and VueVentus dependency app files
    installFile('/resources/js/app.colors.json', JSON.stringify(viltDsDefaultColorPalette, null, 4));
    installFile('/resources/js/app.vv.classes.ts', generateAppVvClassesTs());
    installFile('/resources/js/gsap.ts', generateJetstreamGsapTs());
    // install laravel blade files
    installFile('/resources/views/app.blade.php', generateAppBladePhp());
    // install laravel jetstream layout component files
    installFile('/resources/js/Layouts/AppLayout.vue', generateAppLayoutVue());
    // install laravel jetstream component files
    installFile('/resources/js/Components/ActionMessage.vue', generateActionMessageVue());
    installFile('/resources/js/Components/ActionSection.vue', generateActionSectionVue());
    installFile('/resources/js/Components/ApplicationLogo.vue', generateApplicationLogoVue());
    installFile('/resources/js/Components/ApplicationMark.vue', generateApplicationMarkVue());
    // update laravel php files for VILT DS
    installFile('/config/jetstream.php', generateJetstreamPhp());
    installFile('/routes/web.php', generateWebPhp());
    // install suggested VS Code Extensions for VILT DS
    installFile('/.vscode/extensions.json', JSON.stringify(viltDsVscodeExtensions, null, 4));
}
//# sourceMappingURL=install-vilt-ds-jetstream.js.map