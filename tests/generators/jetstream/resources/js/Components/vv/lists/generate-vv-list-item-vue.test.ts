// ./tests/generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-item-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvListItemVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-item-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/lists/generate-vv-list-item-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvListItemVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvListItemVue() === 'string').toBe(true)

    })

})
