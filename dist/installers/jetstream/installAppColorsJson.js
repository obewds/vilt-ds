// ./src/installers/jetstream/installAppColorsJson.ts
import installWhenNoFile from '../../helpers/installWhenNoFile.js';
import viltDsAppColorsJson from '../../data/colors/viltDsAppColorsJson.js';
export default function () {
    installWhenNoFile('/resources/js/', 'app.colors.json', JSON.stringify(viltDsAppColorsJson, null, 4));
}
//# sourceMappingURL=installAppColorsJson.js.map