// ./tests/generators/jetstream/tests/Vitest/Components/vv/buttons/generate-vv-color-mode-button-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvColorModeButtonTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/buttons/generate-vv-color-mode-button-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-color-mode-button-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvColorModeButtonTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvColorModeButtonTestTs() === 'string').toBe(true)

    })

})
