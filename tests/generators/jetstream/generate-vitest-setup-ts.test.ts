// ./tests/generators/jetstream/generate-vitest-setup-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVitestSetupTs from '../../../src/generators/jetstream/generate-vitest-setup-ts'

describe('./src/generators/jetstream/vscode/generate-vitest-setup-ts.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVitestSetupTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVitestSetupTs() === 'string').toBe(true)

    })

})
