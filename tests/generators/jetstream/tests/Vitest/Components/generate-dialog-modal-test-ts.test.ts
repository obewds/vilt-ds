// ./tests/generators/jetstream/tests/Vitest/Components/generate-dialog-modal-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateDialogModalTest from '../../../../../../src/generators/jetstream/tests/Vitest/Components/generate-dialog-modal-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-dialog-modal-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateDialogModalTest).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateDialogModalTest() === 'string').toBe(true)

    })

})
