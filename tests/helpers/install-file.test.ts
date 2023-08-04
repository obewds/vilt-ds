// ./tests/helpers/install-file.test.ts

import { describe, expect, test } from '@jest/globals'
import fs from 'fs-extra'
import cwd from '../../src/helpers/cwd.js'
import projectFileDoesExist from '../../src/helpers/project-file-does-exist.js'
import installFile from '../../src/helpers/install-file'

describe('./src/helpers/install-file module', () => {

    test('module can be imported successfully', () => {

        expect(installFile).toBeTruthy()

    })

    test('module can install file and verify that the installed file contains installed content', async () => {

        const filepathName = '/install-file.test.txt'
        const fileContent = 'Testing the content.'

        installFile(filepathName, fileContent)

        expect(projectFileDoesExist(filepathName)).toBe(true)

        var scraped = fs.readFileSync(cwd + filepathName,'utf8')

        expect(scraped).toBe(fileContent)

        fs.removeSync('./install-file.test.txt')

        expect(projectFileDoesExist('/install-file.test.txt')).toBe(false)

    })

})
