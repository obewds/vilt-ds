// ./tests/generators/jetstream/resources/js/Components/vv/selects/generate-vv-listbox-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvListboxVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/selects/generate-vv-listbox-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/selects/generate-vv-listbox-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvListboxVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvListboxVue() === 'string').toBe(true)

    })

})
