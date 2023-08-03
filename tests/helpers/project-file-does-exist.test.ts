// ./tests/helpers/project-file-does-exist.test.ts

import { describe, expect, test } from '@jest/globals'
import projectFileDoesExist from '../../src/helpers/project-file-does-exist'

describe('./src/helpers/project-file-does-exist module', () => {

    test('module can be imported successfully', () => {

        expect(projectFileDoesExist).toBeTruthy()

    })

    test('module returns a false value for a file that does not exist', async () => {

        const result = projectFileDoesExist('/file-that-does-not-exist.js')

        expect(result).toBe(false)

    })

    test('module returns a false value for an empty string argument', async () => {

        const result = projectFileDoesExist('')

        expect(result).toBe(false)

    })

    test('module returns a true value for an existing file matching the string argument', async () => {

        const result = projectFileDoesExist('/package.json')

        expect(result).toBe(true)

    })

})
