// ./tests/helpers/remove-file.test.ts

import { describe, expect, test } from '@jest/globals'
import fs from 'fs-extra'
import cwd from '../../src/helpers/cwd.js'
import projectFileDoesExist from '../../src/helpers/project-file-does-exist.js'
import removeFile from '../../src/helpers/remove-file'

describe('./src/helpers/remove-file module', () => {

    test('module can be imported successfully', () => {

        expect(removeFile).toBeTruthy()

    })

})
