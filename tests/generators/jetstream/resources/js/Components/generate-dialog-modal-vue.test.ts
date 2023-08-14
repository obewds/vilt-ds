// ./tests/generators/jetstream/resources/js/Components/generate-dialog-modal-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateDangerButtonVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-dialog-modal-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-dialog-modal-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateDangerButtonVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateDangerButtonVue() === 'string').toBe(true)

    })

})
