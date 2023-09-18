// ./src/updaters/jetstream-base-page-tests.ts

import installFile from '../helpers/install-file.js'

import generateDashboardTestTs from '../generators/jetstream/tests/Vitest/Pages/generate-dashboard-test-ts.js'
import generatePrivacyPolicyTestTs from '../generators/jetstream/tests/Vitest/Pages/generate-privacy-policy-test-ts.js'
import generateTermsOfServiceTestTs from '../generators/jetstream/tests/Vitest/Pages/generate-terms-of-service-test-ts.js'
import generateVueVentusTestTs from '../generators/jetstream/tests/Vitest/Pages/generate-vue-ventus-test-ts.js'
import generateWelcomeTestTs from '../generators/jetstream/tests/Vitest/Pages/generate-welcome-test-ts.js'

export default function (): void {
    
    installFile( '/tests/Vitest/Pages/Dashboard.test.ts', generateDashboardTestTs() )
    installFile( '/tests/Vitest/Pages/PrivacyPolicy.test.ts', generatePrivacyPolicyTestTs() )
    installFile( '/tests/Vitest/Pages/TermsOfService.test.ts', generateTermsOfServiceTestTs() )
    installFile( '/tests/Vitest/Pages/VueVentus.test.ts', generateVueVentusTestTs() )
    installFile( '/tests/Vitest/Pages/Welcome.test.ts', generateWelcomeTestTs() )

}
