// ./tests/updaters/vueventus-components.test.ts

import { describe, expect, test } from '@jest/globals'
import updateVueVentusComponents from '../../src/updaters/vueventus-components'


describe('./src/updaters/vueventus-components module', () => {

    test('module can be imported successfully', () => {

        expect(updateVueVentusComponents).toBeTruthy()

    })

})
