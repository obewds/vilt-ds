// ./tests/generators/jetstream/resources/js/Components/generate-banner-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateBannerVue from '../../../../../../src/generators/jetstream/resources/js/Components/generate-banner-vue'

describe('./src/generators/jetstream/resources/js/Components/generate-banner-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateBannerVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateBannerVue() === 'string').toBe(true)

    })

})
