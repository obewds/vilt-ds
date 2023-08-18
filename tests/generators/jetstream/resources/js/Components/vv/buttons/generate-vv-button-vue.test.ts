// ./tests/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-button-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvButtonVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-button-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-button-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvButtonVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvButtonVue() === 'string').toBe(true)

    })

})
