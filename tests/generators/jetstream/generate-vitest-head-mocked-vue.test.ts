// ./tests/generators/jetstream/generate-vitest-head-mocked-vue.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVitestHeadMockedVue from '../../../src/generators/jetstream/generate-vitest-head-mocked-vue'

describe('./src/generators/jetstream/vscode/generate-vitest-head-mocked-vue.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVitestHeadMockedVue).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVitestHeadMockedVue() === 'string').toBe(true)

    })

})
