// ./tests/generators/jetstream/resources/js/Pages/API/generate-api-index-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateApiIndexVue from '../../../../../../../src/generators/jetstream/resources/js/Pages/API/generate-api-index-vue'

describe('./src/generators/jetstream/resources/js/Pages/API/generate-api-index-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateApiIndexVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateApiIndexVue() === 'string').toBe(true)

    })

})
