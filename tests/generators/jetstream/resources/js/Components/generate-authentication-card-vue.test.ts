// ./tests/generators/jetstream/resources/js/Components/generate-authentication-card-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAuthenticationCardVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-authentication-card-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-authentication-card-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateAuthenticationCardVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAuthenticationCardVue() === 'string').toBe(true)

    })

})
