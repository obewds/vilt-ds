// ./tests/helpers/project-file-does-exist.test.ts

import { describe, expect, test } from '@jest/globals'
import projectFileDoesExist from '../../src/helpers/project-file-does-exist'

describe('./src/helpers/project-file-does-exist module', () => {

    test('module can be imported successfully', () => {

        expect(projectFileDoesExist).toBeTruthy()

    })

})
