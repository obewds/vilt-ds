// ./src/generators/jetstream/generate-vitest-ziggy-route-shim-d-ts.ts

export default function (): string {

return `// ./vitestZiggyRouteShim.d.ts

import type { Config, RouteParam, RouteParamsWithQueryOverload } from 'ziggy-js'

declare function route(
    name: string,
    params?: RouteParamsWithQueryOverload | RouteParam,
    absolute?: boolean,
    config?: Config,
): string;
`;

}
