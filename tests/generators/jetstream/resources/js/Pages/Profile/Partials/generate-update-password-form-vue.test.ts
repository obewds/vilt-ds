// ./tests/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-password-form-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateUpdatePasswordFormVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-password-form-vue'

describe('./src/generators/jetstream/resources/js/Pages/Profile/Partials/generate-update-password-form-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateUpdatePasswordFormVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateUpdatePasswordFormVue() === 'string').toBe(true)

    })

})
