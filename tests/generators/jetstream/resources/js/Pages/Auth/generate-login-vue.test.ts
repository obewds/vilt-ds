// ./tests/generators/jetstream/resources/js/Pages/Auth/generate-login-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateLoginVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Auth/generate-login-vue'

describe('./src/generators/jetstream/resources/js/Pages/Auth/generate-login-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateLoginVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateLoginVue() === 'string').toBe(true)

    })

})
