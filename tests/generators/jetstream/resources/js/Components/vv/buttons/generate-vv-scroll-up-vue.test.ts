// ./tests/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-scroll-up-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateVvScrollUpVue from '../../../../../../../../src/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-scroll-up-vue'

describe('./src/generators/jetstream/resources/js/Components/vv/buttons/generate-vv-scroll-up-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateVvScrollUpVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateVvScrollUpVue() === 'string').toBe(true)

    })

})
