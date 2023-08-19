// ./tests/generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvListVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvListVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvListVue() === 'string').toBe(true)

    })

})
