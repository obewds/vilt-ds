// ./tests/helpers/update-when-file-exists.test.ts

import { describe, expect, test } from '@jest/globals'
import fs from 'fs-extra'
import installWhenNoFile from '../../src/helpers/install-when-no-file'
import projectFileDoesExist from '../../src/helpers/project-file-does-exist.js'
import updateWhenFileExists from '../../src/helpers/update-when-file-exists'

describe('./src/helpers/update-when-file-exists module', () => {

    test('module can be imported successfully', () => {

        expect(updateWhenFileExists).toBeTruthy()

    })

    test('module does not update a non-existing file', async () => {

        updateWhenFileExists('', '/TESTING-2.txt', 'Testing the content.')

        expect(projectFileDoesExist('/TESTING-2.txt')).toBe(false)
        
    })

    test('module can update an existing file successfully', async () => {

        expect(projectFileDoesExist('/TESTING-2.txt')).toBe(false)

        installWhenNoFile('', '/TESTING-2.txt', 'Testing the content.')

        updateWhenFileExists('', '/TESTING-2.txt', 'Changed text.')

        expect(projectFileDoesExist('/TESTING-2.txt')).toBe(true)

        fs.removeSync('./TESTING-2.txt')
        
    })

})
