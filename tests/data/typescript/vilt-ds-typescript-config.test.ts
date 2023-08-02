// ./tests/data/typescript/vilt-ds-typescript-config.test.ts

import { describe, expect, test } from '@jest/globals'

import viltDsTypescriptConfig from '../../../src/data/typescript/vilt-ds-typescript-config'

describe('./src/data/typescript/vilt-ds-typescript-config module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsTypescriptConfig).toBeTruthy()

    })

    test('module default value is a valid object', () => {

        expect(typeof viltDsTypescriptConfig === 'object').toBe(true)

    })

})
