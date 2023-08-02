// ./src/installers/installNpmDeps.ts

import cliSuccessMessage from '../../helpers/cliSuccessMessage.js'
import run from '../../helpers/run.js'

import viltDsJetstreamDeps from '../../data/npm/viltDsJetstreamDeps.js'

export default function (): void {

    const command = 'npm install -D ' + viltDsJetstreamDeps.join(' ')

    run(command)

    console.log(' ')

    viltDsJetstreamDeps.forEach( (dep) => cliSuccessMessage(dep + ' dependency installed!', false, false))

    console.log(' ')

}
