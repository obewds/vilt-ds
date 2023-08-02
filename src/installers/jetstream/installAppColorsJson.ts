// ./src/installers/jetstream/installAppColorsJson.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import viltDsAppColorsJson from '../../data/colors/viltDsAppColorsJson.js'

export default function (): void {

    installWhenNoFile( '/resources/js/', 'app.colors.json', JSON.stringify(viltDsAppColorsJson, null, 4) )

}
