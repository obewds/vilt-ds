// ./tests/generators/jetstream/resources/js/Components/generate-application-mark-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateApplicationMarkVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-application-mark-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-application-mark-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateApplicationMarkVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateApplicationMarkVue() === 'string').toBe(true)

    })

})
