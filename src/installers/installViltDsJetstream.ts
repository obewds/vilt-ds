// ./src/installers/installViltDsJetstream.ts

import updateConfigJetstream from '../updaters/jetstream/updateConfigJetstream.js'
import updateJetstreamGitignore from '../updaters/jetstream/updateJetstreamGitignore.js'

export default function (): void {

    updateJetstreamGitignore()

    updateConfigJetstream()

}
