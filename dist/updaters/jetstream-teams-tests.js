// ./src/updaters/jetstream-teams-tests.ts
import installFile from '../helpers/install-file.js';
import generateCreateTeamFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-create-team-form-test-ts.js';
import generateDeleteTeamFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-delete-team-form-test-ts.js';
import generateTeamMemberManagerTestTs from '../generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-team-member-manager-test-ts.js';
import generateUpdateTeamNameFormTestTs from '../generators/jetstream/tests/Vitest/Pages/Teams/Partials/generate-update-team-name-form-test-ts.js';
import generateTeamsCreateTestTs from '../generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-create-test-ts.js';
import generateTeamsShowTestTs from '../generators/jetstream/tests/Vitest/Pages/Teams/generate-teams-show-test-ts.js';
export default function () {
    installFile('/tests/Vitest/Pages/Teams/Partials/CreateTeamForm.test.ts', generateCreateTeamFormTestTs());
    installFile('/tests/Vitest/Pages/Teams/Partials/DeleteTeamForm.test.ts', generateDeleteTeamFormTestTs());
    installFile('/tests/Vitest/Pages/Teams/Partials/TeamMemberManager.test.ts', generateTeamMemberManagerTestTs());
    installFile('/tests/Vitest/Pages/Teams/Partials/UpdateTeamNameForm.test.ts', generateUpdateTeamNameFormTestTs());
    installFile('/tests/Vitest/Pages/Teams/Create.test.ts', generateTeamsCreateTestTs());
    installFile('/tests/Vitest/Pages/Teams/Show.test.ts', generateTeamsShowTestTs());
}
//# sourceMappingURL=jetstream-teams-tests.js.map