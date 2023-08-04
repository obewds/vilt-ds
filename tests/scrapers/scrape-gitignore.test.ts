// ./tests/scrapers/scrape-gitignore.test.ts

import { describe, expect, test } from '@jest/globals'
import fs from 'fs-extra'
import cwd from '../../src/helpers/cwd'
import scrapeGitignore from '../../src/scrapers/scrape-gitignore'

describe('./src/scrapers/scrape-gitignore module', () => {

    test('module can be imported successfully', () => {

        expect(scrapeGitignore).toBeTruthy()

    })

    test('module returns null when a .gitignore file does not exist', () => {

        expect(scrapeGitignore()).toBe(null)

    })

})
