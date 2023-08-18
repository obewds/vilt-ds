// ./tests/generators/jetstream/resources/js/Components/vv/forms/generate-vv-quad-form-group-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvQuadFormGroupVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/forms/generate-vv-quad-form-group-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/forms/generate-vv-quad-form-group-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvQuadFormGroupVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvQuadFormGroupVue() === 'string').toBe(true)

    })

})
