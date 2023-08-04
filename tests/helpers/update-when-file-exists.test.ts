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

        updateWhenFileExists('', '/update-when-file-exists.txt', 'Testing the content.')

        expect(projectFileDoesExist('/update-when-file-exists.txt')).toBe(false)
        
    })

    test('module can update an existing file successfully', async () => {

        expect(projectFileDoesExist('/update-when-file-exists.txt')).toBe(false)

        installWhenNoFile('', '/update-when-file-exists.txt', 'Testing the content.')

        updateWhenFileExists('', '/update-when-file-exists.txt', 'Changed text.')

        expect(projectFileDoesExist('/update-when-file-exists.txt')).toBe(true)

        fs.removeSync('./update-when-file-exists.txt')
        
    })

})
