// ./tests/generators/jetstream/tests/Vitest/Components/vv/textareas/generate-vv-textarea-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvButtonTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/textareas/generate-vv-textarea-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-textarea-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvButtonTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvButtonTestTs() === 'string').toBe(true)

    })

})
