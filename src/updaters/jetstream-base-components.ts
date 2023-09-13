// ./src/updaters/jetstream-base-components.ts

import installFile from '../helpers/install-file.js'

// import component generators
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

// import vitest test generators for each component
import generateActionMessageTestTs from '../generators/jetstream/tests/Vitest/Components/generate-action-message-test-ts.js' // generate-action-message-test-ts.ts

export default function (): void {

    // install component generators
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

    // install vitest test generators for each component
    installFile( '/tests/Vitest/Components/ActionMessage.test.ts', generateActionMessageTestTs() )

}
