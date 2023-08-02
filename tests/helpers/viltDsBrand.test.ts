// ./tests/helpers/viltDsBrand.test.ts

import { describe, expect, test } from '@jest/globals'
import viltDsBrand from '../../src/helpers/viltDsBrand'

describe('gradientText module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsBrand).toBeTruthy()

    })

    test('module default value is a valid a string', () => {

        expect(typeof viltDsBrand === 'string').toBe(true)

    })

})
