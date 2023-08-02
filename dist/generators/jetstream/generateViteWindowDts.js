// ./src/generators/jetstream/generateViteWindowDts.ts
export default function () {
    return `// ./resources/js/vite-window.d.ts

import type { AxiosInstance } from 'axios'
import type { Config, InputParams, Router } from 'ziggy-js'

declare global {

    interface Window {
        _: Lodash,
        axios: AxiosInstance
        "Ziggy": Config
    }

    declare function route(): Router;
    declare function route(name: string, params?: InputParams, absolute?: boolean, customZiggy?: Config): string;

}
`;
}
//# sourceMappingURL=generateViteWindowDts.js.map