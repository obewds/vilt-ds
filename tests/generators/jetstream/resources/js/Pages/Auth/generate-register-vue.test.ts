// ./tests/generators/jetstream/resources/js/Pages/Auth/generate-register-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateLoginVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Auth/generate-register-vue'

describe('./src/generators/jetstream/resources/js/Pages/Auth/generate-register-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateLoginVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateLoginVue() === 'string').toBe(true)

    })

})
