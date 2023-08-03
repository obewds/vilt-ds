// ./src/installers/jetstream/installNpmDeps.ts

import cliSuccessMessage from '../../helpers/cli-success-message.js'
import run from '../../helpers/run.js'

import viltDsJetstreamDeps from '../../data/npm/vilt-ds-jetstream-deps.js'

export default function (): void {

    const command = 'npm install -D ' + viltDsJetstreamDeps.join(' ')

    run(command)

    console.log(' ')

    viltDsJetstreamDeps.forEach( (dep) => cliSuccessMessage(dep + ' dependency installed!', false, false))

    console.log(' ')

}
