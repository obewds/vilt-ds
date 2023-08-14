// ./tests/generators/jetstream/resources/js/Layouts/generate-app-layout-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateAppLayoutVue from '../../../../../../src/generators/jetstream/resources/js/Layouts/generate-app-layout-vue'

describe('./src/generators/jetstream/resources/js/Layouts/generate-app-layout-vue', () => {

    test('module can be imported successfully', () => {

        expect(generateAppLayoutVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateAppLayoutVue() === 'string').toBe(true)

    })

})
