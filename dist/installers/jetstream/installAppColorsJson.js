// ./src/installers/jetstream/installAppColorsJson.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import viltDsDefaultColorPalette from '../../data/colors/vilt-ds-default-tailwind-color-palette.js';
export default function () {
    installWhenNoFile('/resources/js/', 'app.colors.json', JSON.stringify(viltDsDefaultColorPalette, null, 4));
}
//# sourceMappingURL=installAppColorsJson.js.map