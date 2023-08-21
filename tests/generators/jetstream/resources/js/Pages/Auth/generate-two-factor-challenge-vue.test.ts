// ./tests/generators/jetstream/resources/js/Pages/Auth/generate-two-factor-challenge-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateTwoFactorChallengeVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/Auth/generate-two-factor-challenge-vue'

describe('./src/generators/jetstream/resources/js/Pages/Auth/generate-two-factor-challenge-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateTwoFactorChallengeVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateTwoFactorChallengeVue() === 'string').toBe(true)

    })

})
