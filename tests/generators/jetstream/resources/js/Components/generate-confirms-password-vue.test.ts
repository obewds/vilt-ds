// ./tests/generators/jetstream/resources/js/Components/generate-confirms-password-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateConfirmsPasswordVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-confirms-password-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-confirms-password-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateConfirmsPasswordVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateConfirmsPasswordVue() === 'string').toBe(true)

    })

})
