// ./tests/helpers/run.test.ts

import { describe, expect, test } from '@jest/globals'
import run from '../../src/helpers/run'

describe('./src/helpers/run module', () => {

    test('module can be imported successfully', () => {

        expect(run).toBeTruthy()

    })

})
