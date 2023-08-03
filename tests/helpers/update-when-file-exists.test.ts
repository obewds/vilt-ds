// ./tests/helpers/update-when-file-exists.test.ts

import { describe, expect, test } from '@jest/globals'
import updateWhenFileExists from '../../src/helpers/update-when-file-exists'

describe('./src/helpers/update-when-file-exists module', () => {

    test('module can be imported successfully', () => {

        expect(updateWhenFileExists).toBeTruthy()

    })

})
