// ./tests/generators/jetstream/resources/js/Components/generate-action-message-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateActionMessageVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-action-message-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-action-message-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateActionMessageVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateActionMessageVue() === 'string').toBe(true)

    })

})
