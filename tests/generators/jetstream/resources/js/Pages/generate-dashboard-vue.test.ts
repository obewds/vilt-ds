// ./tests/generators/jetstream/resources/js/Pages/generate-dashboard-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateDashboardVue from '../../../../../../src/generators/jetstream/resources/js/Pages/generate-dashboard-vue'

describe('./src/generators/jetstream/resources/js/Pages/generate-dashboard-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateDashboardVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateDashboardVue() === 'string').toBe(true)

    })

})
