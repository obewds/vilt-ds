// ./tests/generators/jetstream/resources/js/Pages/API/Partials/generate-api-token-manager-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateApiTokenManagerVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/API/Partials/generate-api-token-manager-vue'

describe('./src/generators/jetstream/resources/js/Pages/API/Partials/generate-api-token-manager-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateApiTokenManagerVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateApiTokenManagerVue() === 'string').toBe(true)

    })

})
