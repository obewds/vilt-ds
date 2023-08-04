// ./tests/helpers/install-when-no-file.test.ts

import { describe, expect, test } from '@jest/globals'
import fs from 'fs-extra'
import projectFileDoesExist from '../../src/helpers/project-file-does-exist.js'
import installWhenNoFile from '../../src/helpers/install-when-no-file'

describe('./src/helpers/install-when-no-file module', () => {

    test('module can be imported successfully', () => {

        expect(installWhenNoFile).toBeTruthy()

    })

    test('module can successfully create a file when no file exists, and fails gracefully if a file already exists', async () => {

        installWhenNoFile('', '/install-when-no-file.txt', 'Testing the content.')

        expect(projectFileDoesExist('/install-when-no-file.txt')).toBe(true)

        // this 2nd call will trigger testing coverage for cases where a file exists
        installWhenNoFile('', '/install-when-no-file.txt', 'Testing the content.')

        fs.removeSync('./install-when-no-file.txt')

        expect(projectFileDoesExist('/install-when-no-file.txt')).toBe(false)

    })

})
