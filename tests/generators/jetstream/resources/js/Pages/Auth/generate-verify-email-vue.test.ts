// ./tests/generators/jetstream/resources/js/Pages/Auth/generate-verify-email-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVerifyEmailVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Auth/generate-verify-email-vue'

describe('./src/generators/jetstream/resources/js/Pages/Auth/generate-verify-email-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVerifyEmailVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVerifyEmailVue() === 'string').toBe(true)

    })

})
