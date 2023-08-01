// ./src/helpers/selectInstallation.ts
import inquirer from 'inquirer';
import viltDsBrand from '../helpers/viltDsBrand.js';
export default async function () {
    let choices = [
        'Install VILT DS Into A Laravel Jetstream Starter App',
    ];
    const answers = await inquirer.prompt({
        name: 'installChoice',
        type: 'list',
        message: 'Which ' + viltDsBrand + ' stack are you using?\n',
        choices: choices,
    });
    return answers.installChoice;
}
//# sourceMappingURL=selectInstallation.js.map