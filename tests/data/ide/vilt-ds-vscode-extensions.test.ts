// ./tests/data/ide/vilt-ds-vscode-extensions.test.ts

import { describe, expect, test } from '@jest/globals'

import viltDsVscodeExtensions from '../../../src/data/ide/vilt-ds-vscode-extensions'

describe('./src/data/ide/vilt-ds-vscode-extensions module', () => {

    test('module can be imported successfully', () => {

        expect(viltDsVscodeExtensions).toBeTruthy()

    })

    test('module default value is a valid object', () => {

        expect(typeof viltDsVscodeExtensions === 'object').toBe(true)

    })

    test('module default value has a "recommendations" property', () => {

        expect(viltDsVscodeExtensions.recommendations).toBeTruthy()

    })

    test('module default value "recommendations" property is a valid array', () => {

        expect(Array.isArray(viltDsVscodeExtensions.recommendations)).toBe(true)

    })

})
