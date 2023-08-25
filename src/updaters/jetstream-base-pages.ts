// ./src/updaters/jetstream-base-pages.ts

import installFile from '../helpers/install-file.js'

import generateDashboardVue from '../generators/jetstream/resources/js/Pages/generate-dashboard-vue.js'
import generatePrivacyPolicyVue from '../generators/jetstream/resources/js/Pages/generate-privacy-policy-vue.js'
import generateTermsOfServiceVue from '../generators/jetstream/resources/js/Pages/generate-terms-of-service-vue.js'
import generateVueVentusVue from '../generators/jetstream/resources/js/Pages/generate-vue-ventus-vue.js'
import generatePageWelcomeVue from '../generators/jetstream/resources/js/Pages/generate-welcome-vue.js'

export default function (): void {

    installFile( '/resources/js/Pages/Dashboard.vue', generateDashboardVue() )
    installFile( '/resources/js/Pages/PrivacyPolicy.vue', generatePrivacyPolicyVue() )
    installFile( '/resources/js/Pages/TermsOfService.vue', generateTermsOfServiceVue() )
    installFile( '/resources/js/Pages/VueVentus.vue', generateVueVentusVue() )
    installFile( '/resources/js/Pages/Welcome.vue', generatePageWelcomeVue() )

}
