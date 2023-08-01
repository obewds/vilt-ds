// ./src/installers/installViltDsJetstream.ts

import installJetstreamTailwindConfig from '../installers/installJetstreamTailwindConfig.js'
import installJetstreamViteConfig from '../installers/installJetstreamViteConfig.js'

import updateConfigJetstream from '../updaters/jetstream/updateConfigJetstream.js'
import updateJetstreamGitignore from '../updaters/jetstream/updateJetstreamGitignore.js'

export default function (): void {

    updateJetstreamGitignore()

    updateConfigJetstream()

    installJetstreamTailwindConfig()

    installJetstreamViteConfig()

}
