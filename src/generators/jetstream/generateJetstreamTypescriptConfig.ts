// ./src/generators/jetstream/generateJetstreamTypescriptConfig.ts

export default function (): string {

return `{
    "compilerOptions": {
        // A few notes:
        // - Vue 3 supports ES2016+
        // - For Vite, the actual compilation target is determined by the
        //   ` + "`build.target`" + ` option in the Vite config.
        //   So don't change the ` + "`target`" + ` field here. It has to be
        //   at least ` + "`ES2020`" + ` for dynamic ` + "`import()`" + `s and ` + "`import.meta`" + ` to work correctly.
        // - If you are not using Vite, feel free to override the ` + "`target`" + ` field.
        "target": "ESNext",
        "module": "ESNext",
        "strict": true,
        // ` + '"noImplicitThis": true' + ` is part of ` + "`strict`" + `
        // Added again here in case some users decide to disable ` + "`strict`" + `.
        // This enables stricter inference for data properties on ` + "`this`" + `.
        "noImplicitThis": true,
        "noEmit": true,
        // "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true,
        // Required in Vue projects
        "jsx": "preserve",
        "moduleResolution": "Node",
        // See <https://github.com/vuejs/vue-cli/pull/5688>
        "skipLibCheck": true,
        // Recommended
        "esModuleInterop": true,
        // Required in Vite
        "isolatedModules": true,
        "resolveJsonModule": true,
        "useDefineForClassFields": true,
        "forceConsistentCasingInFileNames": true,
        "importHelpers": true, // ?
        "experimentalDecorators": true, // ?
        "allowImportingTsExtensions": true,
        "allowJs": true, // ?
        "allowSyntheticDefaultImports": true, // ?
        "sourceMap": true, // ?
        "baseUrl": ".",
        "types": [
            "vite/client",
            "node",
            "ziggy-js",
            "gsap"
        ],
        "paths": {
            "@/*": ["resources/*"]
        },
        "lib": [
            "esnext",
            "dom",
            "dom.iterable",
            "scripthost"
        ],
    },
    "typeRoots": [
        "node_modules",
        "node_modules/@types",
        "resources/js"
    ],
    "include": [
        "resources/js/**/*.ts",
        "resources/js/**/*.d.ts",
        "resources/**/*.vue",
        "node_modules/gsap/types/index.d.ts"
    ],
    "exclude": [
        "bootstrap",
        "node_modules",
        "vendor"
    ],
}
`;

}