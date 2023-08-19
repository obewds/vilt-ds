// ./tests/generators/jetstream/resources/js/Pages/generate-privacy-policy-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generatePrivacyPolicyVue from '../../../../../../src/generators/jetstream/resources/js/Pages/generate-privacy-policy-vue'

describe('./src/generators/jetstream/resources/js/Pages/generate-privacy-policy-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generatePrivacyPolicyVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generatePrivacyPolicyVue() === 'string').toBe(true)

    })

})
