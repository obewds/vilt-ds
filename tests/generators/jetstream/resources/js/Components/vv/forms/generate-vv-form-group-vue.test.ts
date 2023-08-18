// ./tests/generators/jetstream/resources/js/Components/vv/forms/generate-vv-form-group-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvFormGroupVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/forms/generate-vv-form-group-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/forms/generate-vv-form-group-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvFormGroupVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvFormGroupVue() === 'string').toBe(true)

    })

})
