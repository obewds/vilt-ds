// ./tests/generators/jetstream/resources/js/Components/vv/elements/generate-vv-el-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvElVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/elements/generate-vv-el-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/elements/generate-vv-el-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvElVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvElVue() === 'string').toBe(true)

    })

})
