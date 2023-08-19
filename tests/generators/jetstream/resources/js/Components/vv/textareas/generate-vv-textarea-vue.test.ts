// ./tests/generators/jetstream/resources/js/Components/vv/textareas/generate-vv-textarea-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvTextareaVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/textareas/generate-vv-textarea-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/textareas/generate-vv-textarea-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvTextareaVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvTextareaVue() === 'string').toBe(true)

    })

})
