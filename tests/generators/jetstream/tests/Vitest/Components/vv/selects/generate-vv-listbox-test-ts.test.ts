// ./tests/generators/jetstream/tests/Vitest/Components/vv/selects/generate-vv-listbox-test-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVvListboxTestTs from '../../../../../../../../src/generators/jetstream/tests/Vitest/Components/vv/selects/generate-vv-listbox-test-ts'

describe('./src/generators/jetstream/tests/Vitest/Components/generate-vv-listbox-test-ts module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVvListboxTestTs).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVvListboxTestTs() === 'string').toBe(true)

    })

})
