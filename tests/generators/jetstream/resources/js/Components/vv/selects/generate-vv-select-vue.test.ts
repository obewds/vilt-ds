// ./tests/generators/jetstream/resources/js/Components/vv/selects/generate-vv-select-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvSelectVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/selects/generate-vv-select-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/selects/generate-vv-select-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvSelectVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvSelectVue() === 'string').toBe(true)

    })

})
