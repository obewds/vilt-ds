// ./src/installers/install-vilt-ds-jetstream.ts

import installFile from '../helpers/install-file.js'

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

// import VueVentus components
import generateVvAnchorVue from '../generators/jetstream/resources/js/Components/vv/anchors/generate-vv-anchor-vue.js'
import generateVvInertiaLinkVue from '../generators/jetstream/resources/js/Components/vv/anchors/generate-vv-inertia-link-vue.js'
import generateVvButtonVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-button-vue.js'
import generateVvColorModeButtonVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-color-mode-button-vue.js'
import generateVvScrollUpVue from '../generators/jetstream/resources/js/Components/vv/buttons/generate-vv-scroll-up-vue.js'
import generateVvElVue from '../generators/jetstream/resources/js/Components/vv/elements/generate-vv-el-vue.js'
import generateVvFormGroupVue from '../generators/jetstream/resources/js/Components/vv/forms/generate-vv-form-group-vue.js'
import generateVvQuadFormGroupVue from '../generators/jetstream/resources/js/Components/vv/forms/generate-vv-quad-form-group-vue.js'
import generateVvCheckboxVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-checkbox-vue.js'
import generateVvInputVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-input-vue.js'
import generateVvRadioVue from '../generators/jetstream/resources/js/Components/vv/inputs/generate-vv-radio-vue.js'
import generateVvListItemVue from '../generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-item-vue.js'
import generateVvListVue from '../generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-vue.js'
import generateVvListboxVue from '../generators/jetstream/resources/js/Components/vv/selects/generate-vv-listbox-vue.js'
import generateVvSelectVue from '../generators/jetstream/resources/js/Components/vv/selects/generate-vv-select-vue.js'
import generateVvTextareaVue from '../generators/jetstream/resources/js/Components/vv/textareas/generate-vv-textarea-vue.js'

// import laravel blade files
import generateAppBladePhp from '../generators/jetstream/resources/views/generate-app-blade-php.js'

// import laravel jetstream layout component files
import generateAppLayoutVue from '../generators/jetstream/resources/js/Layouts/generate-app-layout-vue.js'

// import laravel jetstream component files
import generateActionMessageVue from '../generators/jetstream/resources/js/Components/generate-action-message-vue.js'
import generateActionSectionVue from '../generators/jetstream/resources/js/Components/generate-action-section-vue.js'
import generateApplicationLogoVue from '../generators/jetstream/resources/js/Components/generate-application-logo-vue.js'
import generateApplicationMarkVue from '../generators/jetstream/resources/js/Components/generate-application-mark-vue.js'
import generateAuthenticationCardLogoVue from '../generators/jetstream/resources/js/Components/generate-authentication-card-logo-vue.js'
import generateAuthenticationCardVue from '../generators/jetstream/resources/js/Components/generate-authentication-card-vue.js'
import generateBannerVue from '../generators/jetstream/resources/js/Components/generate-banner-vue.js'
import generateCheckboxVue from '../generators/jetstream/resources/js/Components/generate-checkbox-vue.js'
import generateConfirmationModalVue from '../generators/jetstream/resources/js/Components/generate-confirmation-modal-vue.js'
import generateConfirmsPasswordVue from '../generators/jetstream/resources/js/Components/generate-confirms-password-vue.js'
import generateDangerButtonVue from '../generators/jetstream/resources/js/Components/generate-danger-button-vue.js'
import generateDialogModalVue from '../generators/jetstream/resources/js/Components/generate-dialog-modal-vue.js'
import generateDropdownLinkVue from '../generators/jetstream/resources/js/Components/generate-dropdown-link-vue.js'
import generateDropdownVue from '../generators/jetstream/resources/js/Components/generate-dropdown-vue.js'
import generateFormSectionVue from '../generators/jetstream/resources/js/Components/generate-form-section-vue.js'
import generateInputErrorVue from '../generators/jetstream/resources/js/Components/generate-input-error-vue.js'
import generateInputLabelVue from '../generators/jetstream/resources/js/Components/generate-input-label-vue.js'
import generateModalVue from '../generators/jetstream/resources/js/Components/generate-modal-vue.js'
import generateNavLinkVue from '../generators/jetstream/resources/js/Components/generate-nav-link-vue.js'
import generatePrimaryButtonVue from '../generators/jetstream/resources/js/Components/generate-primary-button-vue.js'
import generateResponsiveNavLinkVue from '../generators/jetstream/resources/js/Components/generate-responsive-nav-link-vue.js'
import generateScrollUpColorModeSectionVue from '../generators/jetstream/resources/js/Components/generate-scroll-up-color-mode-section-vue.js'
import generateSecondaryButtonVue from '../generators/jetstream/resources/js/Components/generate-secondary-button-vue.js'
import generateSectionBorderVue from '../generators/jetstream/resources/js/Components/generate-section-border-vue.js'
import generateSectionTitleVue from '../generators/jetstream/resources/js/Components/generate-section-title-vue.js'
import generateTextInputVue from '../generators/jetstream/resources/js/Components/generate-text-input-vue.js'
import generateWelcomeVue from '../generators/jetstream/resources/js/Components/generate-welcome-vue.js'

// import laravel php files for VILT DS
import generateJetstreamPhp from '../generators/jetstream/config/generate-jetstream-php.js'
import generateWebPhp from '../generators/jetstream/routes/generate-web-php.js'

// import laravel jetstream API components/page files
import generateApiTokenManagerVue from '../generators/jetstream/resources/js/Pages/API/Partials/generate-api-token-manager-vue.js'
import generateApiIndexVue from '../generators/jetstream/resources/js/Pages/API/generate-api-index-vue.js'

// import laravel jetstream Auth components/page files
import generateConfirmPasswordVue from '../generators/jetstream/resources/js/Pages/Auth/generate-confirm-password-vue.js'
import generateForgotPasswordVue from '../generators/jetstream/resources/js/Pages/Auth/generate-forgot-password-vue.js'
import generateLoginVue from '../generators/jetstream/resources/js/Pages/Auth/generate-login-vue.js'
import generateRegisterVue from '../generators/jetstream/resources/js/Pages/Auth/generate-register-vue.js'
import generateResetPasswordVue from '../generators/jetstream/resources/js/Pages/Auth/generate-reset-password-vue.js'
import generateTwoFactorChallengeVue from '../generators/jetstream/resources/js/Pages/Auth/generate-two-factor-challenge-vue.js'
import generateVerifyEmailVue from '../generators/jetstream/resources/js/Pages/Auth/generate-verify-email-vue.js'

// import laravel jetstream Profile components/page files
import generateDeleteUserFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-delete-user-form-vue.js'
import generateLogoutOtherBrowserSessionsFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-logout-other-browser-sessions-form-vue.js'
import generateTwoFactorAuthenticationFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-two-factor-authentication-form-vue.js'
import generateUpdatePasswordFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-password-form-vue.js'
import generateUpdateProfileInformationFormVue from '../generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-profile-information-form-vue.js'
import generateProfileShowVue from '../generators/jetstream/resources/js/Pages/Profile/generate-profile-show-vue.js'

// import laravel jetstream Team components/page files

// import laravel jetstream page component files
import generateDashboardVue from '../generators/jetstream/resources/js/Pages/generate-dashboard-vue.js'
import generatePrivacyPolicyVue from '../generators/jetstream/resources/js/Pages/generate-privacy-policy-vue.js'
import generateTermsOfServiceVue from '../generators/jetstream/resources/js/Pages/generate-terms-of-service-vue.js'
import generateVueVentusVue from '../generators/jetstream/resources/js/Pages/generate-vue-ventus-vue.js'
import generatePageWelcomeVue from '../generators/jetstream/resources/js/Pages/generate-welcome-vue.js'

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
    
    // install VueVentus components
    installFile( '/resources/js/Components/vv/anchors/VvAnchor.vue', generateVvAnchorVue() )
    installFile( '/resources/js/Components/vv/anchors/VvInertiaLink.vue', generateVvInertiaLinkVue() )
    installFile( '/resources/js/Components/vv/buttons/VvButton.vue', generateVvButtonVue() )
    installFile( '/resources/js/Components/vv/buttons/VvColorModeButton.vue', generateVvColorModeButtonVue() )
    installFile( '/resources/js/Components/vv/buttons/VvScrollUp.vue', generateVvScrollUpVue() )
    installFile( '/resources/js/Components/vv/elements/VvEl.vue', generateVvElVue() )
    installFile( '/resources/js/Components/vv/forms/VvFormGroup.vue', generateVvFormGroupVue() )
    installFile( '/resources/js/Components/vv/forms/VvQuadFormGroup.vue', generateVvQuadFormGroupVue() )
    installFile( '/resources/js/Components/vv/inputs/VvCheckbox.vue', generateVvCheckboxVue() )
    installFile( '/resources/js/Components/vv/inputs/VvInput.vue', generateVvInputVue() )
    installFile( '/resources/js/Components/vv/inputs/VvRadio.vue', generateVvRadioVue() )
    installFile( '/resources/js/Components/vv/lists/VvListItem.vue', generateVvListItemVue() )
    installFile( '/resources/js/Components/vv/lists/VvList.vue', generateVvListVue() )
    installFile( '/resources/js/Components/vv/selects/VvListbox.vue', generateVvListboxVue() )
    installFile( '/resources/js/Components/vv/selects/VvSelect.vue', generateVvSelectVue() )
    installFile( '/resources/js/Components/vv/textareas/VvTextarea.vue', generateVvTextareaVue() )

    // install laravel blade files
    installFile( '/resources/views/app.blade.php', generateAppBladePhp() )

    // install laravel jetstream layout component files
    installFile( '/resources/js/Layouts/AppLayout.vue', generateAppLayoutVue() )

    // install laravel jetstream component files
    installFile( '/resources/js/Components/ActionMessage.vue', generateActionMessageVue() )
    installFile( '/resources/js/Components/ActionSection.vue', generateActionSectionVue() )
    installFile( '/resources/js/Components/ApplicationLogo.vue', generateApplicationLogoVue() )
    installFile( '/resources/js/Components/ApplicationMark.vue', generateApplicationMarkVue() )
    installFile( '/resources/js/Components/AuthenticationCardLogo.vue', generateAuthenticationCardLogoVue() )
    installFile( '/resources/js/Components/AuthenticationCard.vue', generateAuthenticationCardVue() )
    installFile( '/resources/js/Components/Banner.vue', generateBannerVue() )
    installFile( '/resources/js/Components/Checkbox.vue', generateCheckboxVue() )
    installFile( '/resources/js/Components/ConfirmationModal.vue', generateConfirmationModalVue() )
    installFile( '/resources/js/Components/ConfirmsPassword.vue', generateConfirmsPasswordVue() )
    installFile( '/resources/js/Components/DangerButton.vue', generateDangerButtonVue() )
    installFile( '/resources/js/Components/DialogModal.vue', generateDialogModalVue() )
    installFile( '/resources/js/Components/DropdownLink.vue', generateDropdownLinkVue() )
    installFile( '/resources/js/Components/Dropdown.vue', generateDropdownVue() )
    installFile( '/resources/js/Components/FormSection.vue', generateFormSectionVue() )
    installFile( '/resources/js/Components/InputError.vue', generateInputErrorVue() )
    installFile( '/resources/js/Components/InputLabel.vue', generateInputLabelVue() )
    installFile( '/resources/js/Components/Modal.vue', generateModalVue() )
    installFile( '/resources/js/Components/NavLink.vue', generateNavLinkVue() )
    installFile( '/resources/js/Components/PrimaryButton.vue', generatePrimaryButtonVue() )
    installFile( '/resources/js/Components/ResponsiveNavLink.vue', generateResponsiveNavLinkVue() )
    installFile( '/resources/js/Components/ScrollUpColorModeSection.vue', generateScrollUpColorModeSectionVue() )
    installFile( '/resources/js/Components/SecondaryButton.vue', generateSecondaryButtonVue() )
    installFile( '/resources/js/Components/SectionBorder.vue', generateSectionBorderVue() )
    installFile( '/resources/js/Components/SectionTitle.vue', generateSectionTitleVue() )
    installFile( '/resources/js/Components/TextInput.vue', generateTextInputVue() )
    installFile( '/resources/js/Components/Welcome.vue', generateWelcomeVue() )

    // update laravel php files for VILT DS
    installFile( '/config/jetstream.php', generateJetstreamPhp() )
    installFile( '/routes/web.php', generateWebPhp() )

    // install laravel jetstream API components/page files
    installFile( '/resources/js/Pages/API/Partials/ApiTokenManager.vue', generateApiTokenManagerVue() )
    installFile( '/resources/js/Pages/API/Index.vue', generateApiIndexVue() )

    // install laravel jetstream Auth components/page files
    installFile( '/resources/js/Pages/Auth/ConfirmPassword.vue', generateConfirmPasswordVue() )
    installFile( '/resources/js/Pages/Auth/ForgotPassword.vue', generateForgotPasswordVue() )
    installFile( '/resources/js/Pages/Auth/Login.vue', generateLoginVue() )
    installFile( '/resources/js/Pages/Auth/Register.vue', generateRegisterVue() )
    installFile( '/resources/js/Pages/Auth/ResetPassword.vue', generateResetPasswordVue() )
    installFile( '/resources/js/Pages/Auth/TwoFactorChallenge.vue', generateTwoFactorChallengeVue() )
    installFile( '/resources/js/Pages/Auth/VerifyEmail.vue', generateVerifyEmailVue() )

    // install laravel jetstream Profile components/page files
    installFile( '/resources/js/Pages/Profile/Partials/DeleteUserForm.vue', generateDeleteUserFormVue() )
    installFile( '/resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue', generateLogoutOtherBrowserSessionsFormVue() )
    installFile( '/resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue', generateTwoFactorAuthenticationFormVue() )
    installFile( '/resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue', generateUpdatePasswordFormVue() )
    installFile( '/resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue', generateUpdateProfileInformationFormVue() )
    installFile( '/resources/js/Pages/Profile/Show.vue', generateProfileShowVue() )

    // install laravel jetstream Team components/page files

    // install laravel jetstream page component files
    installFile( '/resources/js/Pages/Dashboard.vue', generateDashboardVue() )
    installFile( '/resources/js/Pages/PrivacyPolicy.vue', generatePrivacyPolicyVue() )
    installFile( '/resources/js/Pages/TermsOfService.vue', generateTermsOfServiceVue() )
    installFile( '/resources/js/Pages/VueVentus.vue', generateVueVentusVue() )
    installFile( '/resources/js/Pages/Welcome.vue', generatePageWelcomeVue() )

    // install suggested VS Code Extensions for VILT DS
    installFile( '/.vscode/extensions.json', JSON.stringify(viltDsVscodeExtensions, null, 4) )

}
