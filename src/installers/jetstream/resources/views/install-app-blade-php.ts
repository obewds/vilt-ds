// ./src/installers/jetstream/resources/views/install-app-blade-php.ts

import installWhenNoFile from '../../../../helpers/install-when-no-file.js'
import generateAppBladePhp from '../../../../generators/jetstream/resources/views/generate-app-blade-php.js'

export default function (): void {

    installWhenNoFile( '/resources/views/', 'app.blade.php', generateAppBladePhp() )

}