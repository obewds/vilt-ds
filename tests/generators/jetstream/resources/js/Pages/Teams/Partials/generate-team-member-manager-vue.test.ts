// ./tests/generators/jetstream/resources/js/Pages/Teams/Partials/generate-team-member-manager-vue.test.ts

import { describe, expect, test } from '@jest/globals'

import generateTeamMemberManagerVue from '../../../../../../../../src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-team-member-manager-vue'

describe('./src/generators/jetstream/resources/js/Pages/Teams/Partials/generate-team-member-manager-vue module', () => {

    test('module can be imported successfully', () => {

        expect(generateTeamMemberManagerVue).toBeTruthy()

    })

    test('module default value is a valid string', () => {

        expect(typeof generateTeamMemberManagerVue() === 'string').toBe(true)

    })

})
