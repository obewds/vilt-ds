// ./src/generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-team-member-manager-test-ts.ts

export default function (): string {

return `// ./tests/Vitest/Pages/Teams/TeamMemberManager.test.ts

import { mount } from '@vue/test-utils'
import TeamMemberManager from '../../../../../resources/js/Pages/Teams/Partials/TeamMemberManager.vue'

test('TeamMemberManager.vue component imports successfully', async () => {

    expect(TeamMemberManager).toBeTruthy()

})
`;

}
