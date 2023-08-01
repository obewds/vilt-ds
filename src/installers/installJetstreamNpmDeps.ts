// ./src/installers/installJetstreamNpmDeps.ts

import cliSuccessMessage from '../helpers/cliSuccessMessage.js'
import run from '../helpers/run.js'

import jetstreamNpmDeps from '../data/npm/jetstreamNpmDeps.js'

export default function (): void {

    const command = 'npm install -D ' + jetstreamNpmDeps.join(' ')

    run(command)

    console.log(' ')

    jetstreamNpmDeps.forEach( (dep) => cliSuccessMessage(dep + ' dependency installed!', false, false))

    console.log(' ')

}
