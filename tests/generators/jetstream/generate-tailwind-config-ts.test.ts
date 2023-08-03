// ./tests/generators/jetstream/generate-tailwind-config-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateTailwindConfigTs from '../../../src/generators/jetstream/generate-tailwind-config-ts'

describe('./src/generators/jetstream/vscode/generate-tailwind-config-ts.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateTailwindConfigTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateTailwindConfigTs() === 'string').toBe(true)

    })

})
