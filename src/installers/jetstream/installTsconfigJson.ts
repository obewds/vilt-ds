// ./src/installers/jetstream/installTsconfigJson.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import viltDsTypescriptConfig from '../../data/typescript/viltDsTypescriptConfig.js'

export default function (): void {

    installWhenNoFile( '/', 'tsconfig.json', JSON.stringify(viltDsTypescriptConfig, null, 4) )

}
