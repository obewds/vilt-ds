// ./tests/generators/jetstream/resources/js/Pages/generate-terms-of-service-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateTermsOfServiceVue from '../../../../../../src/generators/jetstream/resources/js/Pages/generate-terms-of-service-vue'

describe('./src/generators/jetstream/resources/js/Pages/generate-terms-of-service-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateTermsOfServiceVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateTermsOfServiceVue() === 'string').toBe(true)

    })

})
