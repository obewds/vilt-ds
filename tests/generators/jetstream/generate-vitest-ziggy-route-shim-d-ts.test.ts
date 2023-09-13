// ./tests/generators/jetstream/generate-vitest-ziggy-route-shim-d-ts.test.ts

import { describe, expect, test } from '@jest/globals'
import generateVitestZiggyRouteShim from '../../../src/generators/jetstream/generate-vitest-ziggy-route-shim-d-ts'

describe('./src/generators/jetstream/vscode/generate-vitest-ziggy-route-shim-d-ts.test module', () => {

    test('module can be imported and a value can be accessed successfully', () => {

        expect(generateVitestZiggyRouteShim).toBeTruthy()

    })
    
    test('module default value is a valid string', () => {

        expect(typeof generateVitestZiggyRouteShim() === 'string').toBe(true)

    })

})
