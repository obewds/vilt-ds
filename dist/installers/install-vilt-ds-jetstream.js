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
import generateAuthenticationCardLogoVue from '../generators/jetstream/resources/js/Components/generate-authentication-card-logo-vue.js';
import generateAuthenticationCardVue from '../generators/jetstream/resources/js/Components/generate-authentication-card-vue.js';
import generateBannerVue from '../generators/jetstream/resources/js/Components/generate-banner-vue.js';
import generateCheckboxVue from '../generators/jetstream/resources/js/Components/generate-checkbox-vue.js';
import generateConfirmationModalVue from '../generators/jetstream/resources/js/Components/generate-confirmation-modal-vue.js';
import generateConfirmsPasswordVue from '../generators/jetstream/resources/js/Components/generate-confirms-password-vue.js';
import generateDangerButtonVue from '../generators/jetstream/resources/js/Components/generate-danger-button-vue.js';
import generateDialogModalVue from '../generators/jetstream/resources/js/Components/generate-dialog-modal-vue.js';
import generateDropdownLinkVue from '../generators/jetstream/resources/js/Components/generate-dropdown-link-vue.js';
import generateDropdownVue from '../generators/jetstream/resources/js/Components/generate-dropdown-vue.js';
import generateFormSectionVue from '../generators/jetstream/resources/js/Components/generate-form-section-vue.js';
import generateInputErrorVue from '../generators/jetstream/resources/js/Components/generate-input-error-vue.js';
import generateInputLabelVue from '../generators/jetstream/resources/js/Components/generate-input-label-vue.js';
import generateModalVue from '../generators/jetstream/resources/js/Components/generate-modal-vue.js';
import generateNavLinkVue from '../generators/jetstream/resources/js/Components/generate-nav-link-vue.js';
import generatePrimaryButtonVue from '../generators/jetstream/resources/js/Components/generate-primary-button-vue.js';
import generateResponsiveNavLinkVue from '../generators/jetstream/resources/js/Components/generate-responsive-nav-link-vue.js';
import generateScrollUpColorModeSectionVue from '../generators/jetstream/resources/js/Components/generate-scroll-up-color-mode-section-vue.js';
import generateSecondaryButtonVue from '../generators/jetstream/resources/js/Components/generate-secondary-button-vue.js';
import generateSectionBorderVue from '../generators/jetstream/resources/js/Components/generate-section-border-vue.js';
import generateSectionTitleVue from '../generators/jetstream/resources/js/Components/generate-section-title-vue.js';
import generateTextInputVue from '../generators/jetstream/resources/js/Components/generate-text-input-vue.js';
import generateWelcomeVue from '../generators/jetstream/resources/js/Components/generate-welcome-vue.js';
import generateVvAnchorVue from '../generators/jetstream/resources/js/Components/vv/anchors/generate-vv-anchor-vue.js';
import generateVvInertiaLinkVue from '../generators/jetstream/resources/js/Components/vv/anchors/generate-vv-inertia-link-vue.js';
import generateVvButtonVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-button-vue.js';
import generateVvColorModeButtonVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-color-mode-button-vue.js';
import generateVvScrollUpVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-scroll-up-vue.js';
import generateVvElVue from '../generators/jetstream/resources/js/Components/vv/elements/generate-vv-el-vue.js';
import generateVvFormGroupVue from '../generators/jetstream/resources/js/Components/vv/forms/generate-vv-form-group-vue.js';
import generateVvQuadFormGroupVue from '../generators/jetstream/resources/js/Components/vv/forms/generate-vv-quad-form-group-vue.js';
import generateVvCheckboxVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-checkbox-vue.js';
import generateVvInputVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-input-vue.js';
import generateVvRadioVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-radio-vue.js';
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
    // install VueVentus components
    installFile('/resources/js/Components/vv/anchors/VvAnchor.vue', generateVvAnchorVue());
    installFile('/resources/js/Components/vv/anchors/VvInertiaLink.vue', generateVvInertiaLinkVue());
    installFile('/resources/js/Components/vv/buttons/VvButton.vue', generateVvButtonVue());
    installFile('/resources/js/Components/vv/buttons/VvColorModeButton.vue', generateVvColorModeButtonVue());
    installFile('/resources/js/Components/vv/buttons/VvScrollUp.vue', generateVvScrollUpVue());
    installFile('/resources/js/Components/vv/elements/VvEl.vue', generateVvElVue());
    installFile('/resources/js/Components/vv/forms/VvFormGroup.vue', generateVvFormGroupVue());
    installFile('/resources/js/Components/vv/forms/VvQuadFormGroup.vue', generateVvQuadFormGroupVue());
    installFile('/resources/js/Components/vv/inputs/VvCheckbox.vue', generateVvCheckboxVue());
    installFile('/resources/js/Components/vv/inputs/VvInput.vue', generateVvInputVue());
    installFile('/resources/js/Components/vv/inputs/VvRadio.vue', generateVvRadioVue());
    // install laravel blade files
    installFile('/resources/views/app.blade.php', generateAppBladePhp());
    // install laravel jetstream layout component files
    installFile('/resources/js/Layouts/AppLayout.vue', generateAppLayoutVue());
    // install laravel jetstream component files
    installFile('/resources/js/Components/ActionMessage.vue', generateActionMessageVue());
    installFile('/resources/js/Components/ActionSection.vue', generateActionSectionVue());
    installFile('/resources/js/Components/ApplicationLogo.vue', generateApplicationLogoVue());
    installFile('/resources/js/Components/ApplicationMark.vue', generateApplicationMarkVue());
    installFile('/resources/js/Components/AuthenticationCardLogo.vue', generateAuthenticationCardLogoVue());
    installFile('/resources/js/Components/AuthenticationCard.vue', generateAuthenticationCardVue());
    installFile('/resources/js/Components/Banner.vue', generateBannerVue());
    installFile('/resources/js/Components/Checkbox.vue', generateCheckboxVue());
    installFile('/resources/js/Components/ConfirmationModal.vue', generateConfirmationModalVue());
    installFile('/resources/js/Components/ConfirmsPassword.vue', generateConfirmsPasswordVue());
    installFile('/resources/js/Components/DangerButton.vue', generateDangerButtonVue());
    installFile('/resources/js/Components/DialogModal.vue', generateDialogModalVue());
    installFile('/resources/js/Components/DropdownLink.vue', generateDropdownLinkVue());
    installFile('/resources/js/Components/Dropdown.vue', generateDropdownVue());
    installFile('/resources/js/Components/FormSection.vue', generateFormSectionVue());
    installFile('/resources/js/Components/InputError.vue', generateInputErrorVue());
    installFile('/resources/js/Components/InputLabel.vue', generateInputLabelVue());
    installFile('/resources/js/Components/Modal.vue', generateModalVue());
    installFile('/resources/js/Components/NavLink.vue', generateNavLinkVue());
    installFile('/resources/js/Components/PrimaryButton.vue', generatePrimaryButtonVue());
    installFile('/resources/js/Components/ResponsiveNavLink.vue', generateResponsiveNavLinkVue());
    installFile('/resources/js/Components/ScrollUpColorModeSection.vue', generateScrollUpColorModeSectionVue());
    installFile('/resources/js/Components/SecondaryButton.vue', generateSecondaryButtonVue());
    installFile('/resources/js/Components/SectionBorder.vue', generateSectionBorderVue());
    installFile('/resources/js/Components/SectionTitle.vue', generateSectionTitleVue());
    installFile('/resources/js/Components/TextInput.vue', generateTextInputVue());
    installFile('/resources/js/Components/Welcome.vue', generateWelcomeVue());
    // update laravel php files for VILT DS
    installFile('/config/jetstream.php', generateJetstreamPhp());
    installFile('/routes/web.php', generateWebPhp());
    // install suggested VS Code Extensions for VILT DS
    installFile('/.vscode/extensions.json', JSON.stringify(viltDsVscodeExtensions, null, 4));
}
//# sourceMappingURL=install-vilt-ds-jetstream.js.map