// ./src/updaters/jetstream-api.ts

import installFile from '../helpers/install-file.js'

import generateApiTokenManagerVue from '../generators/jetstream/resources/js/Pages/API/Partials/generate-api-token-manager-vue.js'
import generateApiIndexVue from '../generators/jetstream/resources/js/Pages/API/generate-api-index-vue.js'

export default function (): void {

    installFile( '/resources/js/Pages/API/Partials/ApiTokenManager.vue', generateApiTokenManagerVue() )
    installFile( '/resources/js/Pages/API/Index.vue', generateApiIndexVue() )

}
