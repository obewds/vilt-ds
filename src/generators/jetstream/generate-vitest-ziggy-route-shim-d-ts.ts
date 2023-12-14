// ./src/generators/jetstream/generate-vitest-ziggy-route-shim-d-ts.ts

export default function (): string {

return `// ./vitestZiggyRouteShim.d.ts

// NOTE - ziggy-js as of v1.8 exports it's own typescript
//        so this code has changed to just re-use the route method's typing
//        and the old code that was referencing the @types/ziggy-js types are now
//        no longer pulled in by the typescript compiler
//        --------------
//        So this file is likely now redundant - but is being kept in for now
//        just for testing across both vite and vitest before full removal

// import type { Config, RouteParam, RouteParamsWithQueryOverload } from 'ziggy-js'
import type { Config, RouteName, RouteParams } from 'ziggy-js'

// declare function route(
//     name: string,
//     params?: RouteParamsWithQueryOverload | RouteParam,
//     absolute?: boolean,
//     config?: Config,
// ): string;

export default function route<T extends RouteName>(
    name: T,
    params?: RouteParams<T> | undefined,
    absolute?: boolean,
    config?: Config,
): string;
`;

}
