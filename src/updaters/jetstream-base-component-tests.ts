// ./src/updaters/jetstream-base-component-tests.ts

import installFile from '../helpers/install-file.js'

import generateActionMessageTestTs from '../generators/jetstream/tests/Vitest/Components/generate-action-message-test-ts.js'
import generateActionSectionTestTs from '../generators/jetstream/tests/Vitest/Components/generate-action-section-test-ts.js'
import generateApplicationLogoTestTs from '../generators/jetstream/tests/Vitest/Components/generate-application-logo-test-ts.js'
import generateApplicationMarkTestTs from '../generators/jetstream/tests/Vitest/Components/generate-application-mark-test-ts.js'
import generateAuthenticationCardLogoTestTs from '../generators/jetstream/tests/Vitest/Components/generate-authentication-card-logo-test-ts.js'
import generateAuthenticationCardTestTs from '../generators/jetstream/tests/Vitest/Components/generate-authentication-card-test-ts.js'
import generateBannerTestTs from '../generators/jetstream/tests/Vitest/Components/generate-banner-test-ts.js'
import generateCheckboxTestTs from '../generators/jetstream/tests/Vitest/Components/generate-checkbox-test-ts.js'
import generateConfirmationModalTestTs from '../generators/jetstream/tests/Vitest/Components/generate-confirmation-modal-test-ts.js'
import generateConfirmationPasswordTestTs from '../generators/jetstream/tests/Vitest/Components/generate-confirmation-password-test-ts.js'
import generateDangerButtonTestTs from '../generators/jetstream/tests/Vitest/Components/generate-danger-button-test-ts.js'
import generateDialogModalTestTs from '../generators/jetstream/tests/Vitest/Components/generate-dialog-modal-test-ts.js'
import generateDropdownLinkTestTs from '../generators/jetstream/tests/Vitest/Components/generate-dropdown-link-test-ts.js'
import generateDropdownTestTs from '../generators/jetstream/tests/Vitest/Components/generate-dropdown-test-ts.js'
import generateFormSectionTestTs from '../generators/jetstream/tests/Vitest/Components/generate-form-section-test-ts.js'
import generateInputErrorTestTs from '../generators/jetstream/tests/Vitest/Components/generate-input-error-test-ts.js'
import generateInputLabelTestTs from '../generators/jetstream/tests/Vitest/Components/generate-input-label-test-ts.js'
import generateModalTestTs from '../generators/jetstream/tests/Vitest/Components/generate-modal-test-ts.js'
import generateNavLinkTestTs from '../generators/jetstream/tests/Vitest/Components/generate-nav-link-test-ts.js'
import generatePrimaryButtonTestTs from '../generators/jetstream/tests/Vitest/Components/generate-primary-button-test-ts.js'
import generateResponsiveNavLinkTestTs from '../generators/jetstream/tests/Vitest/Components/generate-responsive-nav-link-test-ts.js'
import generateScrollUpColorModeSectionTestTs from '../generators/jetstream/tests/Vitest/Components/generate-scroll-up-color-mode-section-test-ts.js'
import generateSecondaryButtonTestTs from '../generators/jetstream/tests/Vitest/Components/generate-secondary-button-test-ts.js'
import generateSectionBorderTestTs from '../generators/jetstream/tests/Vitest/Components/generate-section-border-test-ts.js'
import generateSectionTitleTestTs from '../generators/jetstream/tests/Vitest/Components/generate-section-title-test-ts.js'
import generateTextInputTestTs from '../generators/jetstream/tests/Vitest/Components/generate-text-input-test-ts.js'
import generateWelcomeTestTs from '../generators/jetstream/tests/Vitest/Components/generate-welcome-test-ts.js'

export default function (): void {

    installFile( '/tests/Vitest/Components/ActionMessage.test.ts', generateActionMessageTestTs() )
    installFile( '/tests/Vitest/Components/ActionSection.test.ts', generateActionSectionTestTs() )
    installFile( '/tests/Vitest/Components/ApplicationLogo.test.ts', generateApplicationLogoTestTs() )
    installFile( '/tests/Vitest/Components/ApplicationMark.test.ts', generateApplicationMarkTestTs() )
    installFile( '/tests/Vitest/Components/AuthenticationCardLogo.test.ts', generateAuthenticationCardLogoTestTs() )
    installFile( '/tests/Vitest/Components/AuthenticationCard.test.ts', generateAuthenticationCardTestTs() )
    installFile( '/tests/Vitest/Components/Banner.test.ts', generateBannerTestTs() )
    installFile( '/tests/Vitest/Components/Checkbox.test.ts', generateCheckboxTestTs() )
    installFile( '/tests/Vitest/Components/ConfirmationModal.test.ts', generateConfirmationModalTestTs() )
    installFile( '/tests/Vitest/Components/ConfirmationPassword.test.ts', generateConfirmationPasswordTestTs() )
    installFile( '/tests/Vitest/Components/DangerButton.test.ts', generateDangerButtonTestTs() )
    installFile( '/tests/Vitest/Components/DialogModal.test.ts', generateDialogModalTestTs() )
    installFile( '/tests/Vitest/Components/DropdownLink.test.ts', generateDropdownLinkTestTs() )
    installFile( '/tests/Vitest/Components/Dropdown.test.ts', generateDropdownTestTs() )
    installFile( '/tests/Vitest/Components/FormSection.test.ts', generateFormSectionTestTs() )
    installFile( '/tests/Vitest/Components/InputError.test.ts', generateInputErrorTestTs() )
    installFile( '/tests/Vitest/Components/InputLabel.test.ts', generateInputLabelTestTs() )
    installFile( '/tests/Vitest/Components/Modal.test.ts', generateModalTestTs() )
    installFile( '/tests/Vitest/Components/NavLink.test.ts', generateNavLinkTestTs() )
    installFile( '/tests/Vitest/Components/PrimaryButton.test.ts', generatePrimaryButtonTestTs() )
    installFile( '/tests/Vitest/Components/ResponsiveNavLink.test.ts', generateResponsiveNavLinkTestTs() )
    installFile( '/tests/Vitest/Components/ScrollUpColorModeSection.test.ts', generateScrollUpColorModeSectionTestTs() )
    installFile( '/tests/Vitest/Components/SecondaryButton.test.ts', generateSecondaryButtonTestTs() )
    installFile( '/tests/Vitest/Components/SectionBorder.test.ts', generateSectionBorderTestTs() )
    installFile( '/tests/Vitest/Components/SectionTitle.test.ts', generateSectionTitleTestTs() )
    installFile( '/tests/Vitest/Components/TextInput.test.ts', generateTextInputTestTs() )
    installFile( '/tests/Vitest/Components/Welcome.test.ts', generateWelcomeTestTs() )

}
