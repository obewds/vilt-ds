// ./tests/generators/jetstream/generate-vitest-config-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateViteConfigTs from '../../../src/generators/jetstream/generate-vitest-config-ts'

describe('./src/generators/jetstream/vscode/generate-vitest-config-ts.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateViteConfigTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateViteConfigTs() === 'string').toBe(true)

    })

})
