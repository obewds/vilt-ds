// ./src/installers/jetstream/installAppColorsJson.ts

import installWhenNoFile from '../../helpers/installWhenNoFile.js'

import viltDsDefaultColorPalette from '../../data/colors/vilt-ds-default-tailwind-color-palette.js'


export default function (): void {

    installWhenNoFile( '/resources/js/', 'app.colors.json', JSON.stringify(viltDsDefaultColorPalette, null, 4) )

}
