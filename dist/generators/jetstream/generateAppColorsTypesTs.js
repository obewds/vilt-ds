// ./src/generators/jetstream/generateAppColorsTypesTs.ts
export default function () {
    return `// ./resources/js/Types/app-colors-types.ts

export interface VvAppDefaultTintsShades {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
}

export interface VvAppCompleteTintsShades {
    "50": string
    "100": string
    "150": string
    "200": string
    "250": string
    "300": string
    "350": string
    "400": string
    "450": string
    "500": string
    "550": string
    "600": string
    "650": string
    "700": string
    "750": string
    "800": string
    "850": string
    "900": string
    "950": string
}

export interface VvAppGenericColors<T> {
    black: string
    white: string
    gray: T
    trueGray: T
    warmGray: T
    coolGray: T
    red: T
    rose: T
    pink: T
    fuchsia: T
    purple: T
    violet: T
    indigo: T
    blue: T
    lightBlue: T
    cyan: T
    teal: T
    emerald: T
    green: T
    lime: T
    yellow: T
    amber: T
    orange: T
}

export interface VvAppGenericCompleteColors<T> {
    black: string
    white: string
    gray: T
    trueGray: T
    warmGray: T
    coolGray: T
    redGray: T
    roseGray: T
    pinkGray: T
    fuchsiaGray: T
    purpleGray: T
    violetGray: T
    indigoGray: T
    blueGray: T
    lightBlueGray: T
    cyanGray: T
    tealGray: T
    emeraldGray: T
    greenGray: T
    limeGray: T
    yellowGray: T
    amberGray: T
    orangeGray: T
    red: T
    rose: T
    pink: T
    fuchsia: T
    purple: T
    violet: T
    indigo: T
    blue: T
    lightBlue: T
    cyan: T
    teal: T
    emerald: T
    green: T
    lime: T
    yellow: T
    amber: T
    orange: T
}

export type VvAppDefaultColors = VvAppGenericColors<VvAppDefaultTintsShades>
export type VvAppCompleteColors = VvAppGenericCompleteColors<VvAppDefaultTintsShades>
`;
}
//# sourceMappingURL=generateAppColorsTypesTs.js.map