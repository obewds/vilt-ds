// ./tests/generators/jetstream/resources/js/Pages/generate-vue-ventus-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVueVentusVue from '../../../../../../src/generators/jetstream/resources/js/Pages/generate-vue-ventus-vue'

describe('./src/generators/jetstream/resources/js/Pages/generate-vue-ventus-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVueVentusVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVueVentusVue() === 'string').toBe(true)

    })

})
