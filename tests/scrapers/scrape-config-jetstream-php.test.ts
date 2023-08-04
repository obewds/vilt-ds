// ./tests/scrapers/scrape-config-jetstream-php.test.ts

import { describe, expect, test } from '@jest/globals'
import fs from 'fs-extra'
import cwd from '../../src/helpers/cwd'
import scrapeConfigJetstreamPhp from '../../src/scrapers/scrape-config-jetstream-php'

describe('./src/scrapers/scrape-config-jetstream-php module', () => {

    test('module can be imported successfully', () => {

        expect(scrapeConfigJetstreamPhp).toBeTruthy()

    })

    test('module returns null when a config/jetstream.php file does not exist', () => {

        expect(scrapeConfigJetstreamPhp()).toBe(null)

    })

})
