// ./tests/helpers/cli-success-message.test.ts

import { describe, expect, test } from '@jest/globals'
import cliSuccessMessage from '../../src/helpers/cli-success-message'


const consoleLogs = jest.spyOn(console, 'log').mockImplementation(() => {})


describe('./src/helpers/cli-success-message module', () => {

    test('module can be imported successfully', () => {

        expect(cliSuccessMessage).toBeTruthy()

    })

    test('module method invokes without errors or return artifacts', () => {

        const test = cliSuccessMessage('test', true, true)
        const testTwo = cliSuccessMessage('test', false, false)

        expect(consoleLogs).toBeCalled()

    })

})


consoleLogs.mockReset()

