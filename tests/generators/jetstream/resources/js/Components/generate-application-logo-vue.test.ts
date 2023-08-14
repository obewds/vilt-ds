// ./tests/generators/jetstream/resources/js/Components/generate-application-logo-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateApplicationLogoVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-application-logo-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-application-logo-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateApplicationLogoVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateApplicationLogoVue() === 'string').toBe(true)

    })

})
