// ./tests/scrapers/scrape-routes-web-php.test.ts

import { describe, expect, test } from '@jest/globals'
import fs from 'fs-extra'
import cwd from '../../src/helpers/cwd'
import scrapeRoutesWebPhp from '../../src/scrapers/scrape-routes-web-php'

describe('./src/scrapers/scrape-routes-web-php module', () => {

    test('module can be imported successfully', () => {

        expect(scrapeRoutesWebPhp).toBeTruthy()

    })

    test('module returns null when a routes/web.php file does not exist', () => {

        expect(scrapeRoutesWebPhp()).toBe(null)

    })

})
