// ./tests/generators/jetstream/resources/js/Components/generate-modal-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateModalVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-modal-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-modal-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateModalVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateModalVue() === 'string').toBe(true)

    })

})
