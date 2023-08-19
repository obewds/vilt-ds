// ./tests/generators/jetstream/resources/js/Pages/generate-welcome-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateWelcomeVue from '../../../../../../src/generators/jetstream/resources/js/Pages/generate-welcome-vue'

describe('./src/generators/jetstream/resources/js/Pages/generate-welcome-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateWelcomeVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateWelcomeVue() === 'string').toBe(true)

    })

})
