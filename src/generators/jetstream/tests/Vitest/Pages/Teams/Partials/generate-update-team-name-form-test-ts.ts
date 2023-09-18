// ./src/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-update-team-name-form-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Teams/UpdateTeamNameForm.test.ts

import { mount } from '@vue/test-utils'
import UpdateTeamNameForm from '../../../../../resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue'

test('UpdateTeamNameForm.vue component imports successfully', async () => {

    expect(UpdateTeamNameForm).toBeTruthy()

})
`;

}
