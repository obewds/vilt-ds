// ./tests/generators/jetstream/generate-vite-config-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateViteConfigTs from '../../../src/generators/jetstream/generate-vite-config-ts'

describe('./src/generators/jetstream/vscode/generate-vite-config-ts.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateViteConfigTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateViteConfigTs() === 'string').toBe(true)

    })

})
