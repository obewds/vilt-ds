// ./tests/helpers/cwd.test.ts

import { describe, expect, test } from '@jest/globals'
import cwd from '../../src/helpers/cwd'

describe('./src/helpers/cwd module', () => {

    test('module can be imported successfully', () => {

        let value = cwd

        expect(value).toBeTruthy()

    })

})
