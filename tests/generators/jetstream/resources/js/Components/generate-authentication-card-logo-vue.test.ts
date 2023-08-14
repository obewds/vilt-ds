// ./tests/generators/jetstream/resources/js/Components/generate-authentication-card-logo-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAuthenticationCardLogoVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-authentication-card-logo-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-authentication-card-logo-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateAuthenticationCardLogoVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAuthenticationCardLogoVue() === 'string').toBe(true)

    })

})
