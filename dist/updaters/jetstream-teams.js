// ./src/updaters/jetstream-team.ts
import installFile from '../helpers/install-file.js';
import generateCreateTeamFormVue from '../generators/jetstream/resources/js/Pages/Teams/Partials/generate-create-team-form-vue.js';
import generateDeleteTeamFormVue from '../generators/jetstream/resources/js/Pages/Teams/Partials/generate-delete-team-form-vue.js';
import generateTeamMemberManagerVue from '../generators/jetstream/resources/js/Pages/Teams/Partials/generate-team-member-manager-vue.js';
import generateUpdateTeamNameFormVue from '../generators/jetstream/resources/js/Pages/Teams/Partials/generate-update-team-name-form-vue.js';
import generateTeamsCreateVue from '../generators/jetstream/resources/js/Pages/Teams/generate-teams-create-vue.js';
import generateTeamsShowVue from '../generators/jetstream/resources/js/Pages/Teams/generate-teams-show-vue.js';
export default function () {
    installFile('/resources/js/Pages/Teams/Partials/CreateTeamForm.vue', generateCreateTeamFormVue());
    installFile('/resources/js/Pages/Teams/Partials/DeleteTeamForm.vue', generateDeleteTeamFormVue());
    installFile('/resources/js/Pages/Teams/Partials/TeamMemberManager.vue', generateTeamMemberManagerVue());
    installFile('/resources/js/Pages/Teams/Partials/UpdateTeamNameForm.vue', generateUpdateTeamNameFormVue());
    installFile('/resources/js/Pages/Teams/Create.vue', generateTeamsCreateVue());
    installFile('/resources/js/Pages/Teams/Show.vue', generateTeamsShowVue());
}
//# sourceMappingURL=jetstream-teams.js.map