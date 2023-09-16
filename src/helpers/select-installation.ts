// ./src/helpers/select-installation.ts

import inquirer from 'inquirer'

import viltDsBrand from '../helpers/vilt-ds-brand.js'

export type ViltDsInstallationChoice = 'Install VILT DS and Vitest TS Tests Into A Laravel Jetstream Starter App' | null

export default async function (): Promise<ViltDsInstallationChoice> {

    let choices: Array<ViltDsInstallationChoice> = [
        'Install VILT DS and Vitest TS Tests Into A Laravel Jetstream Starter App',
    ]
    
    const answers = await inquirer.prompt({
        name: 'installChoice',
        type: 'list',
        message: 'Which ' + viltDsBrand + ' stack are you using?\n',
        choices: choices,
    })

    return answers.installChoice as ViltDsInstallationChoice

}

