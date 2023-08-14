// ./tests/generators/jetstream/resources/js/Components/generate-confirmation-modal-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateConfirmationModalVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-confirmation-modal-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-confirmation-modal-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateConfirmationModalVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateConfirmationModalVue() === 'string').toBe(true)

    })

})
